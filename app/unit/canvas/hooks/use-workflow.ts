import {useCallback} from "react";
import {getOutgoers, useStoreApi} from "reactflow";
import type {Node} from "@/app/unit/canvas/node/base/types";
import {useWorkflowTemplate} from "@/app/unit/canvas/hooks/use-workflow-template";
import data from "@/app/unit/canvas/data"

export const useWorkflowInit = () => {
    const {nodes, edges} = useWorkflowTemplate()
    // TODO fetch from server
    const id = 1

    /*
    return {
        id: 1,
        name: "自定义工作流",
        config: {
            nodes: nodes,
            edges: edges,
            viewport: {zoom: 1, x: 0, y: 0}
        }
    }
     */
    return {
        id: 1,
        name: "自定义工作流",
        config: data
    }
}

export const useWorkflow = () => {
    const store = useStoreApi()

    const getAfterNodesInSameBranch = useCallback((nodeId: string) => {
        const {
            getNodes,
            edges,
        } = store.getState()
        const nodes = getNodes()
        const currentNode = nodes.find(node => node.id === nodeId)!

        if (!currentNode)
            return []
        const list: Node[] = [currentNode]

        const traverse = (root: Node, callback: (node: Node) => void) => {
            if (root) {
                const outgoers = getOutgoers(root, nodes, edges)

                if (outgoers.length) {
                    outgoers.forEach((node) => {
                        callback(node)
                        traverse(node, callback)
                    })
                }
            }
        }
        traverse(currentNode, (node) => {
            list.push(node)
        })

        return list
    }, [store])

    return {
        getAfterNodesInSameBranch
    }
}