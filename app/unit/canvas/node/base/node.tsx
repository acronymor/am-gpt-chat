import React, {cloneElement, ReactElement} from "react";
import {NodeEnum, NodeProps} from "@/app/unit/canvas/node/base/types";
import NodeSourceHandle from "@/app/unit/canvas/node/base/node-source-handle";
import NodeTargetHandle from "@/app/unit/canvas/node/base/node-target-handle";
import node_handle_style from "@/app/unit/canvas/node/base/node-handle.module.scss"
import NodeControl from "@/app/unit/canvas/node/base/node-control";
import NodePlay from "@/app/unit/canvas/node/base/node-play";

type BaseNodeProps = {
    children: ReactElement
} & NodeProps
const BaseNode = ({id, data, children}: BaseNodeProps) => {
    return (
        <div className={node_handle_style["node-handle"]}>
            {data.type !== NodeEnum.Start && (<NodeTargetHandle id={id} data={data}/>)}
            {data.type !== NodeEnum.End && (<NodeSourceHandle id={id} data={data}/>)}
            <NodeControl id={id} data={data}/>
            <NodePlay id={id} data={data}/>
            {cloneElement(children, {id, data})}
        </div>
    )
}

export default React.memo(BaseNode)