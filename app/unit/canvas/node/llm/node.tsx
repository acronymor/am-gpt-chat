import React from 'react'
import {LLMNodeType} from "@/app/unit/canvas/node/llm/types";
import {NodeProps} from "@/app/unit/canvas/node/base/types";
import Gpt4Icon from "@/app/icons/gpt-4.svg";
import LlmIcon from "@/app/icons/llm.svg";
import node_style from "@/app/ui/lib/node.module.scss";
import {IconNode} from "@/app/ui/lib/node";


const Node = ({data}: NodeProps<LLMNodeType>) => {
    const {provider, name: modelId} = data.model || {}
    const hasSetModel = provider && modelId

    if (!hasSetModel) {
        return <></>
    }

    return (
        <IconNode title={data.title} desc={data.desc} icon={<LlmIcon/>}>
            <div style={{display: "flex"}}>
                <div className={node_style["icon-node-icon"]}><Gpt4Icon/></div>
                <div className={node_style["icon-node-text"]}>{modelId}</div>
            </div>
        </IconNode>
    )
}
export default React.memo(Node)