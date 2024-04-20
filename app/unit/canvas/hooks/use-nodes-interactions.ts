import {useCallback} from "react";
import {NodeMouseHandler, OnConnect} from "reactflow";
import {useCanvasStore} from "@/app/store/canvas";

export const useNodesInteractions = () => {
    const canvasStore = useCanvasStore()

    const handleNodeConnect = useCallback<OnConnect>(({
                                                          source,
                                                          sourceHandle,
                                                          target,
                                                          targetHandle,
                                                      }) => {


        console.log(source)
        console.log(target)
    }, [])

    const handleNodeSelect = useCallback((nodeId: string, cancelSelection?: boolean) => {
        canvasStore.setNode(nodeId)
        canvasStore.setShowModal(!cancelSelection)
    }, []);

    const handleNodeClick = useCallback<NodeMouseHandler>((_, node) => {
        handleNodeSelect(node.id, !node.selected)
    }, [handleNodeSelect])

    return {
        handleNodeConnect,
        handleNodeSelect,
        handleNodeClick
    }
}