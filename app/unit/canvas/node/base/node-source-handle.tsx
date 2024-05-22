import React, {useCallback, useEffect, useState} from "react";
import {Handle, Position,} from 'reactflow'
import {Node, NodeEnum, ToolDefaultValue} from "@/app/unit/canvas/node/base/types";
import BlockSelector from "@/app/unit/canvas/block/blocks";
import {useNodesInteractions} from "@/app/unit/canvas/hooks/use-nodes-interactions";
import {useNodesExtraData} from "@/app/unit/canvas/hooks/use-nodes-data";
import node_handle_style from "@/app/unit/canvas/node/base/node-handle.module.scss"

type NodeHandleProps = {
    handleId?: string
} & Pick<Node, 'id' | 'data'>

const NodeSourceHandle = ({id, data, handleId = "source",}: NodeHandleProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const {handleNodeAdd} = useNodesInteractions()
    const nodesExtraData = useNodesExtraData()

    const availableNextNodes = nodesExtraData[data.type].availableNextNodes
    const connected = data._connectedSourceHandleIds?.includes(handleId)
    const isConnectable = !!availableNextNodes.length

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
                prevNodeId: id,
                prevNodeSourceHandle: handleId,
            },
        )
    }, [handleNodeAdd, id, handleId])

    useEffect(() => {
        // TODO   const notInitialWorkflow = useStore(s => s.notInitialWorkflow)
        if (false && data.type === NodeEnum.Start)
            setOpen(true)
    }, [data.type])

    return (
        <Handle
            id={handleId}
            type="source"
            position={Position.Right}
            className={node_handle_style["source-dot"]}
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
                    placement='right'
                    availableBlocksTypes={availableNextNodes}
                />
            }
        </Handle>
    )
}

export default React.memo(NodeSourceHandle)