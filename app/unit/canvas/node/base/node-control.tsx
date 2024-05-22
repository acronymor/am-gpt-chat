import React, {MouseEventHandler, useCallback, useState} from "react";
import {Node} from "@/app/unit/canvas/node/base/types";
import {
    PortalToFollowElem,
    PortalToFollowElemContent,
    PortalToFollowElemTrigger
} from "@/app/unit/canvas/block/portal-to-follow-elem";
import DotsIcon from "@/app/icons/dots.svg";

type PanelOperatorProps = {
    id: string
    data: Node['data']
}

const NodeControl = ({id, data}: PanelOperatorProps) => {
    const [open, setOpen] = useState(false)

    const handleOpenChange = useCallback((newOpen: boolean) => {
        setOpen(newOpen)
    }, [])
    const handleTrigger = useCallback<MouseEventHandler<HTMLDivElement>>((e) => {
        e.stopPropagation()
        handleOpenChange(!open)
    }, [handleOpenChange, open])

    return (
        <PortalToFollowElem
            placement={"bottom-end"}
            open={open}
            onOpenChange={handleOpenChange}
        >
            <PortalToFollowElemTrigger
                onClick={handleTrigger}
            >
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    position: "absolute",
                    top: "-20px",
                    right: "0px"
                }}>
                    <div style={{cursor: "pointer"}} onClick={() => handleOpenChange(!open)}>
                        <DotsIcon/>
                    </div>
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
                    <div>Change Block</div>
                    <div>About</div>
                    <div>Delete</div>
                </div>
            </PortalToFollowElemContent>
        </PortalToFollowElem>
    );
}
export default React.memo(NodeControl)