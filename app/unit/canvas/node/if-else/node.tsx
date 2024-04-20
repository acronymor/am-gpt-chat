import React from 'react'
import {IfElseNodeType} from "@/app/unit/canvas/node/if-else/types";
import {NodeProps} from "@/app/unit/canvas/node/base/types";
import {IconNode} from "@/app/ui/lib/node";
import LlmIcon from "@/app/icons/llm.svg";
import node_style from "@/app/ui/lib/node.module.scss";


const Node = ({data}: NodeProps<IfElseNodeType>) => {
    return (
        <IconNode title={data.title} desc={data.desc} icon={<LlmIcon/>}>
            <div className={node_style["icon-node-text"]}>{data.logical_operator}</div>
        </IconNode>
    )
}
export default React.memo(Node)