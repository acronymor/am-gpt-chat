import React, {cloneElement, ReactElement} from "react";
import {NodeEnum, NodeProps} from "@/app/unit/canvas/node/base/types";
import {NodeSourceHandle, NodeTargetHandle} from "@/app/unit/canvas/node/base/node-handle";

type BaseNodeProps = {
    children: ReactElement
} & NodeProps
const BaseNode = ({id, data, children}: BaseNodeProps) => {
    return (
        <div>
            {
                <NodeTargetHandle
                    id={id}
                    data={data}
                    handleId="target"
                />
            }
            {
                data.type !== NodeEnum.IfElse && (
                    <NodeSourceHandle
                        id={id}
                        data={data}
                        handleId="source"
                    />
                )
            }
            {cloneElement(children, {id, data})}
        </div>)
}

export default React.memo(BaseNode)