import React, {useCallback, useState} from "react";
import {BaseEdge, EdgeLabelRenderer, EdgeProps, getSimpleBezierPath, Position} from 'reactflow';
import BlockSelector from "@/app/unit/canvas/block/blocks";
import {useNodesInteractions} from "@/app/unit/canvas/hooks/use-nodes-interactions";
import {useNodesExtraData} from "@/app/unit/canvas/hooks/use-nodes-data";
import {Edge, OnSelectBlock} from "@/app/unit/canvas/node/base/types";

const CanvasEdge = ({
                        id,
                        data,
                        source,
                        sourceHandleId,
                        target,
                        targetHandleId,
                        sourceX,
                        sourceY,
                        targetX,
                        targetY,
                        selected,
                    }: EdgeProps) => {
    const [
        edgePath,
        labelX,
        labelY,
    ] = getSimpleBezierPath({
        sourceX: sourceX - 8,
        sourceY,
        sourcePosition: Position.Right,
        targetX: targetX + 8,
        targetY,
        targetPosition: Position.Left,
    })

    const [open, setOpen] = useState(false)
    const {handleNodeAdd} = useNodesInteractions()
    const nodesExtraData = useNodesExtraData()
    const availablePrevNodes = nodesExtraData[(data as Edge['data'])!.targetType]?.availablePrevNodes || []
    const availableNextNodes = nodesExtraData[(data as Edge['data'])!.sourceType]?.availableNextNodes || []
    const handleOpenChange = useCallback((v: boolean) => {
        setOpen(v)
    }, [])


    const handleInsert = useCallback<OnSelectBlock>((nodeType, toolDefaultValue) => {
        handleNodeAdd(
            {
                nodeType,
                toolDefaultValue,
            },
            {
                prevNodeId: source,
                prevNodeSourceHandle: sourceHandleId || 'source',
                nextNodeId: target,
                nextNodeTargetHandle: targetHandleId || 'target',
            },
        )
    }, [source, sourceHandleId, target, targetHandleId])

    return (
        <>
            <BaseEdge
                id={id}
                path={edgePath}
                style={{
                    stroke: (selected || data?._connectedNodeIsHovering || data?._runned) ? 'var(--primary)' : 'var(--black)',
                    strokeWidth: 1,
                }}
            />
            <EdgeLabelRenderer>
                <div
                    style={{
                        position: 'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
                        pointerEvents: 'all',
                    }}
                >
                    <BlockSelector
                        open={open}
                        onOpenChange={handleOpenChange}
                        asChild
                        onSelect={handleInsert}
                        availableBlocksTypes={availablePrevNodes.filter(x => availableNextNodes.includes(x))}
                        showIcon={data?._hovering}
                    />
                </div>
            </EdgeLabelRenderer>
        </>
    )
};

export default React.memo(CanvasEdge)