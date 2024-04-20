import React from 'react'
import {AnswerNodeType} from "@/app/unit/canvas/node/answer/types";
import {NodeProps} from "@/app/unit/canvas/node/base/types";
import {IconNode} from "@/app/ui/lib/node";
import AnswerIcon from "@/app/icons/answer.svg";
import node_style from "@/app/ui/lib/node.module.scss";


const Node = ({data}: NodeProps<AnswerNodeType>) => {
    const {answer} = data

    return (
        <IconNode title={data.title} desc={data.desc} icon={<AnswerIcon/>}>
            <div className={node_style["icon-node-text"]}>{answer}</div>
        </IconNode>
    )

}
export default React.memo(Node)