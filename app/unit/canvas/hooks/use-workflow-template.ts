import {generateNewNode} from "@/app/unit/canvas/hooks/util";
import {useNodesInitialData} from "@/app/unit/canvas/hooks/use-nodes-data";
import {START_INITIAL_POSITION} from "@/app/unit/canvas/hooks/constants";


export const useWorkflowTemplate = () => {
    const nodesInitialData = useNodesInitialData()

    const startNode = generateNewNode({
        data: nodesInitialData.start,
        position: START_INITIAL_POSITION,
    })

    return {
        nodes: [startNode],
        edges: [],
        viewport: {}
    }
}