import type {ComponentType} from 'react'
import React from 'react'
import {NodeProps} from "reactflow";
import BaseNode from "@/app/unit/canvas/node/base/node";
import {NodeEnum} from "@/app/unit/canvas/node/base/types";
import StartNode from "@/app/unit/canvas/node/start/node"
import EndNode from "@/app/unit/canvas/node/end/node"
import LLMNode from "@/app/unit/canvas/node/llm/node"
import AnswerMNode from "@/app/unit/canvas/node/answer/node"
import IfElseNode from "@/app/unit/canvas/node/if-else/node"

const NodeComponentMap: Record<string, ComponentType<any>> = {
    [NodeEnum.Start]: StartNode,
    [NodeEnum.End]: EndNode,
    [NodeEnum.LLM]: LLMNode,
    [NodeEnum.IfElse]: IfElseNode,
    [NodeEnum.Answer]: AnswerMNode,
}


const CanvasNode = (props: NodeProps) => {
    const nodeData = props.data
    const NodeComponent = NodeComponentMap[nodeData.type]

    return (
        <BaseNode {...props}>
            <NodeComponent/>
        </BaseNode>
    )
}
CanvasNode.displayName = 'CanvasNode'

export default React.memo(CanvasNode)