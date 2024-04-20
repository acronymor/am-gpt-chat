import React from "react";
import {Handle, Position,} from 'reactflow'
import {Node} from "@/app/unit/canvas/node/base/types";

type NodeHandleProps = {
    handleId: string
    handleClassName?: string
    nodeSelectorClassName?: string
} & Pick<Node, 'id' | 'data'>

export const NodeSourceHandle = React.memo(({
                                                id,
                                                data,
                                                handleId,
                                                handleClassName,
                                                nodeSelectorClassName,
                                            }: NodeHandleProps) => {
    return (
        <>
            <Handle
                id={handleId}
                type="source"
                position={Position.Right}
                className={handleClassName}
            >
            </Handle>
        </>
    )
})
NodeSourceHandle.displayName = "NodeSourceHandle"

export const NodeTargetHandle = React.memo(({
                                                id,
                                                data,
                                                handleId,
                                                handleClassName,
                                                nodeSelectorClassName,
                                            }: NodeHandleProps) => {
    return (
        <>
            <Handle
                id={handleId}
                type="target"
                position={Position.Left}
                className={handleClassName}
            >
            </Handle>
        </>
    )
})
NodeTargetHandle.displayName = "NodeTargetHandle"