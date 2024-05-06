import React from 'react'
import {LLMNodeType} from "@/app/unit/canvas/node/llm/types";
import {NodeProps} from "@/app/unit/canvas/node/base/types";
import Gpt4Icon from "@/app/icons/gpt-4.svg";
import LlmIcon from "@/app/icons/llm.svg";
import node_style from "@/app/ui/lib/node.module.scss";
import {IconNode} from "@/app/ui/lib/node";


const Node = ({data}: NodeProps<LLMNodeType>) => {
    const {selected, model} = data
    const {provider, name: modelId} = model || {}
    const hasSetModel = provider && modelId

    return (
        <IconNode title={data.title} desc={data.desc} icon={<LlmIcon/>} selected={selected ?? false}>
            <div style={{display: "flex"}}>
                <div className={node_style["icon-node-icon"]}><Gpt4Icon fill='var(--black)'/></div>
                <div className={node_style["icon-node-text"]}>{modelId}</div>
            </div>
        </IconNode>
    )
}
export default React.memo(Node)