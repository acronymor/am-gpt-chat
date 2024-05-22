import React, {useCallback, useState} from "react";
import {Handle, Position,} from 'reactflow'
import {Node, NodeEnum, ToolDefaultValue} from "@/app/unit/canvas/node/base/types";
import BlockSelector from "@/app/unit/canvas/block/blocks";
import {useNodesInteractions} from "@/app/unit/canvas/hooks/use-nodes-interactions";
import {useNodesExtraData} from "@/app/unit/canvas/hooks/use-nodes-data";
import node_handle_style from "@/app/unit/canvas/node/base/node-handle.module.scss"

type NodeHandleProps = {
    handleId?: string
} & Pick<Node, 'id' | 'data'>


const NodeTargetHandle = ({id, data, handleId = "target"}: NodeHandleProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const {handleNodeAdd} = useNodesInteractions()
    const connected = data._connectedTargetHandleIds?.includes(handleId)

    const nodesExtraData = useNodesExtraData()
    const availablePrevNodes = nodesExtraData[data.type].availablePrevNodes
    const isConnectable = !!availablePrevNodes.length

    const handleOpenChange = useCallback((v: boolean) => {
        setOpen(v)
    }, [])
    const handleHandleClick = useCallback(() => {
        if (!connected)
            setOpen(v => !v)
    }, [connected])
    const handleSelect = useCallback((type: NodeEnum, toolDefaultValue?: ToolDefaultValue) => {
        handleNodeAdd(
            {
                nodeType: type,
                toolDefaultValue,
            },
            {
                nextNodeId: id,
                nextNodeTargetHandle: handleId,
            },
        )
    }, [handleNodeAdd, id, handleId])

    return (
        <Handle
            id={handleId}
            type="target"
            position={Position.Left}
            className={node_handle_style["target-dot"]}
            isConnectable={isConnectable}
            onClick={handleHandleClick}
        >
            {
                !connected && isConnectable && !data._isInvalidConnection &&
                <BlockSelector
                    open={open}
                    onOpenChange={handleOpenChange}
                    onSelect={handleSelect}
                    asChild
                    placement='left'
                    availableBlocksTypes={availablePrevNodes}
                />
            }
        </Handle>
    )
}

export default React.memo(NodeTargetHandle)