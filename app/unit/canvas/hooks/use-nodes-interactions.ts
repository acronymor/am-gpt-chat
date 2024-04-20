import {useCallback} from "react";
import {OnConnect} from "reactflow";

export const useNodesInteractions = () => {
    const handleNodeConnect = useCallback<OnConnect>(({
                                                          source,
                                                          sourceHandle,
                                                          target,
                                                          targetHandle,
                                                      }) => {


        console.log(source)
        console.log(target)
    }, [])


    return {
        handleNodeConnect
    }
}