import {Edge, Node} from "@/app/unit/canvas/node/base/types";

type ConnectedSourceOrTargetNodesChange = {
    type: string
    edge: Edge
}[]

export const getNodesConnectedSourceOrTargetHandleIdsMap = (changes: ConnectedSourceOrTargetNodesChange, nodes: Node[]) => {
    const nodesConnectedSourceOrTargetHandleIdsMap = {} as Record<string, any>

    changes.forEach((change) => {
        const {edge, type,} = change
        const sourceNode = nodes.find(node => node.id === edge.source)!
        if (sourceNode) {
            nodesConnectedSourceOrTargetHandleIdsMap[sourceNode.id] = nodesConnectedSourceOrTargetHandleIdsMap[sourceNode.id] || {
                _connectedSourceHandleIds: [...(sourceNode?.data._connectedSourceHandleIds || [])],
                _connectedTargetHandleIds: [...(sourceNode?.data._connectedTargetHandleIds || [])],
            }
        }

        const targetNode = nodes.find(node => node.id === edge.target)!
        if (targetNode) {
            nodesConnectedSourceOrTargetHandleIdsMap[targetNode.id] = nodesConnectedSourceOrTargetHandleIdsMap[targetNode.id] || {
                _connectedSourceHandleIds: [...(targetNode?.data._connectedSourceHandleIds || [])],
                _connectedTargetHandleIds: [...(targetNode?.data._connectedTargetHandleIds || [])],
            }
        }

        if (sourceNode) {
            if (type === 'remove')
                nodesConnectedSourceOrTargetHandleIdsMap[sourceNode.id]._connectedSourceHandleIds = nodesConnectedSourceOrTargetHandleIdsMap[sourceNode.id]._connectedSourceHandleIds.filter((handleId: string) => handleId !== edge.sourceHandle)

            if (type === 'add')
                nodesConnectedSourceOrTargetHandleIdsMap[sourceNode.id]._connectedSourceHandleIds.push(edge.sourceHandle || 'source')
        }

        if (targetNode) {
            if (type === 'remove')
                nodesConnectedSourceOrTargetHandleIdsMap[targetNode.id]._connectedTargetHandleIds = nodesConnectedSourceOrTargetHandleIdsMap[targetNode.id]._connectedTargetHandleIds.filter((handleId: string) => handleId !== edge.targetHandle)

            if (type === 'add')
                nodesConnectedSourceOrTargetHandleIdsMap[targetNode.id]._connectedTargetHandleIds.push(edge.targetHandle || 'target')
        }
    })

    return nodesConnectedSourceOrTargetHandleIdsMap
}