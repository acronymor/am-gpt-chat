import React from 'react'
import {NodeProps} from "@/app/unit/canvas/node/base/types";
import StartIcon from "@/app/icons/start.svg";
import {IconNode} from "@/app/ui/lib/node";
import node_style from "@/app/ui/lib/node.module.scss";
import {VariableAssignerNodeType} from "@/app/unit/canvas/node/variable-assigner/types";


const Node = ({data}: NodeProps<VariableAssignerNodeType>) => {
    const {selected} = data

    return (
        <IconNode title={data.title} desc={data.desc} icon={<StartIcon/>} selected={selected ?? false}>
            <div className={`${node_style["icon-node-text"]} clickable`}>{data.desc}</div>
        </IconNode>
    )
}
export default React.memo(Node)