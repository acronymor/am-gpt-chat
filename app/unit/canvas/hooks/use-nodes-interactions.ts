import {useCallback, useRef} from 'react'
import {produce} from 'immer'
import type {HandleType, NodeMouseHandler, OnConnect, OnConnectStart,} from 'reactflow'
import {getConnectedEdges, useStoreApi,} from 'reactflow'
import {Node} from "@/app/unit/canvas/node/base/types";
import {getNodesConnectedSourceOrTargetHandleIdsMap} from "@/app/unit/canvas/hooks/util";


export const useNodesInteractions = () => {
    const store = useStoreApi()
    const connectingNodeRef = useRef<{ nodeId: string; handleType: HandleType } | null>(null)

    const handleNodeSelect = useCallback((nodeId: string, cancelSelection?: boolean) => {
        const {
            getNodes,
            setNodes,
            edges,
            setEdges,
        } = store.getState()

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

        console.log("--------------------", newNodes)

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
        console.log("handleNodeConnectStart")
        if (nodeId && handleType) {
            connectingNodeRef.current = {
                nodeId,
                handleType,
            }
        }
    }, [])

    const handleNodeConnectEnd = useCallback(() => {
        console.log("handleNodeConnectEnd")
        connectingNodeRef.current = null
    }, [])

    const handleNodeDelete = useCallback((nodeId: string) => {
        console.log("handleNodeDelete")
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


    return {
        handleNodeSelect,
        handleNodeClick,
        handleNodeConnect,
        handleNodeConnectStart,
        handleNodeConnectEnd,
        handleNodeDelete,
    }
}