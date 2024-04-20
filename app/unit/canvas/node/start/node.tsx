import React from 'react'
import {StartNodeType} from "@/app/unit/canvas/node/start/types";
import {NodeProps} from "@/app/unit/canvas/node/base/types";
import StartIcon from "@/app/icons/start.svg";
import {IconNode} from "@/app/ui/lib/node";
import node_style from "@/app/ui/lib/node.module.scss";


const Node = ({data}: NodeProps<StartNodeType>) => {
    return (
        <IconNode title={data.title} desc={data.desc} icon={<StartIcon/>}>
            <div className={node_style["icon-node-text"]}>{data.desc}</div>
        </IconNode>
    )
}
export default React.memo(Node)