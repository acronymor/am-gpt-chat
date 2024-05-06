import React, {MouseEventHandler, useCallback, useState} from "react";
import {
    PortalToFollowElem,
    PortalToFollowElemContent,
    PortalToFollowElemTrigger
} from "@/app/unit/canvas/block/portal-to-follow-elem";
import {OffsetOptions, Placement} from "@floating-ui/react";
import PlusIcon from "@/app/icons/add.svg";
import {NodeEnum, OnSelectBlock} from "@/app/unit/canvas/node/base/types";
import {InputText} from "@/app/ui/lib/input";
import Block from "@/app/unit/canvas/block/block"


type NodeSelectorProps = {
    open?: boolean
    onOpenChange?: (open: boolean) => void
    onSelect: OnSelectBlock
    placement?: Placement
    offset?: OffsetOptions
    showIcon?: boolean
    asChild?: boolean
    availableBlocksTypes?: NodeEnum[]
}

const Blocks = ({
                    open: openFromProps,
                    onOpenChange,
                    onSelect,
                    placement = 'right',
                    offset = 6,
                    showIcon = false,
                    asChild,
                    availableBlocksTypes,
                }: NodeSelectorProps) => {
    const [searchText, setSearchText] = useState('')
    const [localOpen, setLocalOpen] = useState(false)
    const open = openFromProps === undefined ? localOpen : openFromProps
    const handleOpenChange = useCallback((newOpen: boolean) => {
        setLocalOpen(newOpen)

        if (onOpenChange)
            onOpenChange(newOpen)
    }, [onOpenChange])
    const handleTrigger = useCallback<MouseEventHandler<HTMLDivElement>>((e) => {
        e.stopPropagation()
        handleOpenChange(!open)
    }, [handleOpenChange, open])
    const handleSelect = useCallback<OnSelectBlock>((type, toolDefaultValue) => {
        handleOpenChange(false)
        onSelect(type, toolDefaultValue)
    }, [handleOpenChange, onSelect])

    return (
        <PortalToFollowElem
            placement={placement}
            offset={offset}
            open={open}
            onOpenChange={handleOpenChange}
        >
            <PortalToFollowElemTrigger
                asChild={asChild}
                onClick={handleTrigger}
            >
                <div
                    style={{
                        visibility: showIcon ? "visible" : "hidden",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '16px',
                        height: '16px',
                        cursor: 'crosshair',
                    }}
                >
                    <PlusIcon fill='var(--theme-color)' stroke='var(--primary)'/>
                </div>
            </PortalToFollowElemTrigger>
            <PortalToFollowElemContent style={{zIndex: 9}}>
                <div style={
                    {
                        padding: '8px',
                        backgroundColor: 'var(--white)',
                        justifyContent: 'center',
                        alignItems: 'left',
                        borderRadius: 10,
                        borderStyle: 'ridge',
                        borderColor: 'var(--card-shadow)',
                        boxShadow: 'var(--card-shadow)'
                    }
                }>
                    <InputText onChange={(e) => {
                        setSearchText(e)
                    }} uKey={"search key"} uValue={'search value'}/>
                    <Block searchText={searchText}
                           onSelect={handleSelect}
                           availableBlocksTypes={availableBlocksTypes}
                    />
                </div>
            </PortalToFollowElemContent>
        </PortalToFollowElem>
    );
}
export default React.memo(Blocks)