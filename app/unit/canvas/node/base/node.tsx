import React, {cloneElement, ReactElement} from "react";
import {NodeEnum, NodeProps} from "@/app/unit/canvas/node/base/types";
import {NodeSourceHandle, NodeTargetHandle} from "@/app/unit/canvas/node/base/node-handle";
import node_handle_style from "@/app/unit/canvas/node/base/node-handle.module.scss"

type BaseNodeProps = {
    children: ReactElement
} & NodeProps
const BaseNode = ({id, data, children}: BaseNodeProps) => {
    return (
        <div className={node_handle_style["node-handle"]}>
            {
                data.type !== NodeEnum.Start && (
                    <NodeTargetHandle
                        id={id}
                        data={data}
                        handleId="target"
                        handleClassName={node_handle_style["target-dot"]}
                    />)
            }
            {
                data.type !== NodeEnum.End && (
                    <NodeSourceHandle
                        id={id}
                        data={data}
                        handleId="source"
                        handleClassName={node_handle_style["source-dot"]}
                    />
                )
            }
            {cloneElement(children, {id, data})}
        </div>)
}

export default React.memo(BaseNode)