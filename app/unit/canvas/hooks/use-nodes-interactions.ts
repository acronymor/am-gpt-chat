import {useCallback, useRef} from 'react'
import {produce} from 'immer'
import {
    getConnectedEdges,
    getOutgoers,
    HandleType,
    NodeMouseHandler,
    OnConnect,
    OnConnectStart,
    useStoreApi,
} from 'reactflow'
import {Edge, Node, NodeEnum, OnNodeAdd} from "@/app/unit/canvas/node/base/types";
import {generateNewNode, getNodesConnectedSourceOrTargetHandleIdsMap} from "@/app/unit/canvas/hooks/util";
import {NODE_WIDTH_X_OFFSET, NODES_INITIAL_DATA, Y_OFFSET} from "@/app/unit/canvas/hooks/constants";
import {useWorkflow} from "@/app/unit/canvas/hooks/use-workflow";

export const useNodesInteractions = () => {
    const store = useStoreApi()
    const connectingNodeRef = useRef<{ nodeId: string; handleType: HandleType } | null>(null)
    const {getAfterNodesInSameBranch,} = useWorkflow()

    const handleNodeSelect = useCallback((nodeId: string, cancelSelection?: boolean) => {
        const {getNodes, setNodes, edges, setEdges,} = store.getState()

        const nodes = getNodes()
        const selectedNode = nodes.find(node => node.data.selected)

        if (!cancelSelection && selectedNode?.id === nodeId)
            return

        const newNodes = produce(nodes, (draft) => {
            draft.forEach((node) => {
                if (node.id === nodeId)
                    node.data.selected = !cancelSelection
                else
                    node.data.selected = false
            })
        })
        setNodes(newNodes)

        const connectedEdges = getConnectedEdges([{id: nodeId} as Node], edges).map(edge => edge.id)
        const newEdges = produce(edges, (draft) => {
            draft.forEach((edge) => {
                if (connectedEdges.includes(edge.id)) {
                    edge.data = {
                        ...edge.data,
                        _connectedNodeIsSelected: !cancelSelection,
                    }
                } else {
                    edge.data = {
                        ...edge.data,
                        _connectedNodeIsSelected: false,
                    }
                }
            })
        })
        setEdges(newEdges)

    }, [store])

    const handleNodeClick = useCallback<NodeMouseHandler>((_, node) => {
        handleNodeSelect(node.id)
    }, [handleNodeSelect])

    const handleNodeConnect = useCallback<OnConnect>(({
                                                          source,
                                                          sourceHandle,
                                                          target,
                                                          targetHandle,
                                                      }) => {
        console.log("handleNodeConnect")
        if (source === target)
            return

        const {
            getNodes,
            setNodes,
            edges,
            setEdges,
        } = store.getState()
        const nodes = getNodes()
        const targetNode = nodes.find(node => node.id === target!)

        const needDeleteEdges = edges.filter((edge) => {
            if (edge.source === source) {
                if (edge.sourceHandle)
                    return edge.sourceHandle === sourceHandle
                else
                    return true
            }
            if (edge.target === target) {
                if (edge.targetHandle)
                    return edge.targetHandle === targetHandle
                else
                    return true
            }
            return false
        })
        const needDeleteEdgesIds = needDeleteEdges.map(edge => edge.id)
        const newEdge = {
            id: `${source}-${target}`,
            type: 'custom',
            source: source!,
            target: target!,
            sourceHandle,
            targetHandle,
            data: {
                sourceType: nodes.find(node => node.id === source)!.data.type,
                targetType: nodes.find(node => node.id === target)!.data.type,
            },
        }
        const nodesConnectedSourceOrTargetHandleIdsMap = getNodesConnectedSourceOrTargetHandleIdsMap(
            [
                ...needDeleteEdges.map(edge => ({type: 'remove', edge})),
                {type: 'add', edge: newEdge},
            ],
            nodes,
        )
        const newNodes = produce(nodes, (draft: Node[]) => {
            draft.forEach((node) => {
                if (nodesConnectedSourceOrTargetHandleIdsMap[node.id]) {
                    node.data = {
                        ...node.data,
                        ...nodesConnectedSourceOrTargetHandleIdsMap[node.id],
                    }
                }
            })
        })
        setNodes(newNodes)
        const newEdges = produce(edges, (draft) => {
            const filtered = draft.filter(edge => !needDeleteEdgesIds.includes(edge.id))

            filtered.push(newEdge)

            return filtered
        })
        setEdges(newEdges)
    }, [store])

    const handleNodeConnectStart = useCallback<OnConnectStart>((_, {nodeId, handleType}) => {
        if (nodeId && handleType) {
            connectingNodeRef.current = {
                nodeId,
                handleType,
            }
        }
    }, [])

    const handleNodeConnectEnd = useCallback(() => {
        connectingNodeRef.current = null
    }, [])

    const handleNodeDelete = useCallback((nodeId: string) => {
        const {
            getNodes,
            setNodes,
            edges,
            setEdges,
        } = store.getState()

        const nodes = getNodes()
        const currentNodeIndex = nodes.findIndex(node => node.id === nodeId)
        const connectedEdges = getConnectedEdges([{id: nodeId} as Node], edges)
        const nodesConnectedSourceOrTargetHandleIdsMap = getNodesConnectedSourceOrTargetHandleIdsMap(connectedEdges.map(edge => ({
            type: 'remove',
            edge
        })), nodes)
        const newNodes = produce(nodes, (draft: Node[]) => {
            draft.forEach((node) => {
                if (nodesConnectedSourceOrTargetHandleIdsMap[node.id]) {
                    node.data = {
                        ...node.data,
                        ...nodesConnectedSourceOrTargetHandleIdsMap[node.id],
                    }
                }
            })
            draft.splice(currentNodeIndex, 1)
        })
        setNodes(newNodes)
        const newEdges = produce(edges, (draft) => {
            return draft.filter(edge => !connectedEdges.find(connectedEdge => connectedEdge.id === edge.id))
        })
        setEdges(newEdges)
    }, [store])

    const handleNodeAdd = useCallback<OnNodeAdd>((
        {
            nodeType,
            sourceHandle = 'source',
            targetHandle = 'target',
            toolDefaultValue,
        },
        {
            prevNodeId,
            prevNodeSourceHandle,
            nextNodeId,
            nextNodeTargetHandle,
        },
    ) => {
        const {
            getNodes,
            setNodes,
            edges,
            setEdges,
        } = store.getState()
        const nodes = getNodes()
        const nodesWithSameType = nodes.filter(node => node.data.type === nodeType)
        const newNode = generateNewNode({
            data: {
                ...NODES_INITIAL_DATA[nodeType],
                title: nodesWithSameType.length > 0 ? `workflow.blocks.${nodeType} ${nodesWithSameType.length + 1}` : `workflow.blocks.${nodeType}`,
                ...(toolDefaultValue || {}),
                selected: true,
            },
            position: {
                x: 0,
                y: 0,
            }
        })

        if (prevNodeId && !nextNodeId) {
            const prevNodeIndex = nodes.findIndex(node => node.id === prevNodeId)
            const prevNode = nodes[prevNodeIndex]
            const outgoers = getOutgoers(prevNode, nodes, edges).sort((a, b) => a.position.y - b.position.y)
            const lastOutgoer = outgoers[outgoers.length - 1]
            newNode.data._connectedTargetHandleIds = [targetHandle]
            newNode.data._connectedSourceHandleIds = []
            newNode.position = {
                x: lastOutgoer ? lastOutgoer.position.x : prevNode.position.x + NODE_WIDTH_X_OFFSET,
                y: lastOutgoer ? lastOutgoer.position.y + lastOutgoer.height! + Y_OFFSET : prevNode.position.y,
            }

            const newEdge = {
                id: `${prevNodeId}-${newNode.id}`,
                type: 'custom',
                source: prevNodeId,
                sourceHandle: prevNodeSourceHandle,
                target: newNode.id,
                targetHandle,
                data: {
                    sourceType: prevNode.data.type,
                    targetType: newNode.data.type,
                    _connectedNodeIsSelected: true,
                },
            }
            const newNodes = produce(nodes, (draft: Node[]) => {
                draft.forEach((node) => {
                    node.data.selected = false

                    if (node.id === prevNode.id)
                        node.data._connectedSourceHandleIds?.push(prevNodeSourceHandle!)
                })
                draft.push(newNode)
            })
            setNodes(newNodes)
            const newEdges = produce(edges, (draft) => {
                draft.forEach((item) => {
                    item.data = {
                        ...item.data,
                        _connectedNodeIsSelected: false,
                    }
                })
                draft.push(newEdge)
            })
            setEdges(newEdges)
        }
        if (!prevNodeId && nextNodeId) {
            const nextNodeIndex = nodes.findIndex(node => node.id === nextNodeId)
            const nextNode = nodes[nextNodeIndex]!
            newNode.data._connectedSourceHandleIds = [sourceHandle]
            newNode.data._connectedTargetHandleIds = []
            newNode.position = {
                x: nextNode.position.x,
                y: nextNode.position.y,
            }

            const newEdge = {
                id: `${newNode.id}-${nextNodeId}`,
                type: 'custom',
                source: newNode.id,
                sourceHandle,
                target: nextNodeId,
                targetHandle: nextNodeTargetHandle,
                data: {
                    sourceType: newNode.data.type,
                    targetType: nextNode.data.type,
                    _connectedNodeIsSelected: true,
                },
            }

            const afterNodesInSameBranch = getAfterNodesInSameBranch(nextNodeId!)
            const afterNodesInSameBranchIds = afterNodesInSameBranch.map(node => node.id)
            const newNodes = produce(nodes, (draft) => {
                draft.forEach((node) => {
                    node.data.selected = false

                    if (afterNodesInSameBranchIds.includes(node.id))
                        node.position.x += NODE_WIDTH_X_OFFSET

                    if (node.id === nextNodeId)
                        node.data._connectedTargetHandleIds?.push(nextNodeTargetHandle!)
                })
                draft.push(newNode)
            })
            setNodes(newNodes)
            const newEdges = produce(edges, (draft) => {
                draft.forEach((item) => {
                    item.data = {
                        ...item.data,
                        _connectedNodeIsSelected: false,
                    }
                })
                draft.push(newEdge)
            })
            setEdges(newEdges)
        }
        if (prevNodeId && nextNodeId) {
            const prevNode = nodes.find(node => node.id === prevNodeId)!
            const nextNode = nodes.find(node => node.id === nextNodeId)!
            newNode.data._connectedTargetHandleIds = [targetHandle]
            newNode.data._connectedSourceHandleIds = [sourceHandle]
            newNode.position = {
                x: nextNode.position.x,
                y: nextNode.position.y,
            }
            newNode.positionAbsolute = newNode.position

            const currentEdgeIndex = edges.findIndex(edge => edge.source === prevNodeId && edge.target === nextNodeId)
            const newPrevEdge = {
                id: `${prevNodeId}-${newNode.id}`,
                type: 'custom',
                source: prevNodeId,
                sourceHandle: prevNodeSourceHandle,
                target: newNode.id,
                targetHandle,
                data: {
                    sourceType: prevNode.data.type,
                    targetType: newNode.data.type,
                    _connectedNodeIsSelected: true,
                },
            }
            let newNextEdge: Edge | null = null
            if (nodeType !== NodeEnum.IfElse && nodeType !== NodeEnum.QuestionClassifier) {
                newNextEdge = {
                    id: `${newNode.id}-${nextNodeId}`,
                    type: 'custom',
                    source: newNode.id,
                    sourceHandle,
                    target: nextNodeId,
                    targetHandle: nextNodeTargetHandle,
                    data: {
                        sourceType: newNode.data.type,
                        targetType: nextNode.data.type,
                        _connectedNodeIsSelected: true,
                    },
                }
            }
            const nodesConnectedSourceOrTargetHandleIdsMap = getNodesConnectedSourceOrTargetHandleIdsMap(
                [
                    {type: 'remove', edge: edges[currentEdgeIndex]},
                    {type: 'add', edge: newPrevEdge},
                    ...(newNextEdge ? [{type: 'add', edge: newNextEdge}] : []),
                ],
                [...nodes, newNode],
            )

            const afterNodesInSameBranch = getAfterNodesInSameBranch(nextNodeId!)
            const afterNodesInSameBranchIds = afterNodesInSameBranch.map(node => node.id)
            const newNodes = produce(nodes, (draft) => {
                draft.forEach((node) => {
                    node.data.selected = false

                    if (nodesConnectedSourceOrTargetHandleIdsMap[node.id]) {
                        node.data = {
                            ...node.data,
                            ...nodesConnectedSourceOrTargetHandleIdsMap[node.id],
                        }
                    }
                    if (afterNodesInSameBranchIds.includes(node.id))
                        node.position.x += NODE_WIDTH_X_OFFSET
                })
                draft.push(newNode)
            })
            setNodes(newNodes)

            const newEdges = produce(edges, (draft) => {
                draft.splice(currentEdgeIndex, 1)
                draft.forEach((item) => {
                    item.data = {
                        ...item.data,
                        _connectedNodeIsSelected: false,
                    }
                })
                draft.push(newPrevEdge)

                if (newNextEdge)
                    draft.push(newNextEdge)
            })

            setEdges(newEdges)
        }
    }, [store])


    return {
        handleNodeSelect,
        handleNodeAdd,
        handleNodeClick,
        handleNodeConnect,
        handleNodeConnectStart,
        handleNodeConnectEnd,
        handleNodeDelete,
    }
}