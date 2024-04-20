import React from 'react'
import {EndNodeType} from "@/app/unit/canvas/node/end/types";
import {NodeProps} from "@/app/unit/canvas/node/base/types";
import {IconNode} from "@/app/ui/lib/node";
import LlmIcon from "@/app/icons/llm.svg";
import node_style from "@/app/ui/lib/node.module.scss";


const Node = ({data}: NodeProps<EndNodeType>) => {
    const {variables} = data

    return (
        <IconNode title={data.title} desc={data.desc} icon={<LlmIcon/>}>
            <div className={node_style["icon-node-text"]}>{variables.join(", ")}</div>
        </IconNode>
    )
}
export default React.memo(Node)