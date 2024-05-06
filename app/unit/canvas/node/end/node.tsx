import React from 'react'
import {EndNodeType} from "@/app/unit/canvas/node/end/types";
import {NodeProps} from "@/app/unit/canvas/node/base/types";
import {IconNode} from "@/app/ui/lib/node";
import LlmIcon from "@/app/icons/llm.svg";
import node_style from "@/app/ui/lib/node.module.scss";


const Node = ({data}: NodeProps<EndNodeType>) => {
    const {selected} = data

    return (
        <IconNode title={data.title} desc={data.desc} icon={<LlmIcon/>} selected={selected ?? false}>
            <div className={node_style["icon-node-text"]}>{["a", "b"].join(", ")}</div>
        </IconNode>
    )
}
export default React.memo(Node)