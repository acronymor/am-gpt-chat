'use client'

import React, {useState} from "react";
import {IconButton} from "@/app/ui/lib/button";
import AddIcon from "@/app/icons/add.svg"
import EditIcon from "@/app/icons/edit.svg"
import DeleteIcon from "@/app/icons/delete.svg"
import DownloadIcon from "@/app/icons/download.svg"
import CopyIcon from "@/app/icons/copy.svg"
import BotIcon from "@/app/icons/bot.svg"
import {Modal} from "@/app/ui/lib/modal";
import {MaskSetting} from "@/app/unit/mask/ui/mask-setting";
import mask_style from "@/app/unit/mask/mask.module.scss";

type MaskBody = {
    id: number,
    name: string,
    model: string,
    drop: (id: number) => Promise<void>
}

export function MaskBody(mask: MaskBody) {
    const [editingMask, setEditingMask] = useState<boolean>(false)

    return (
        <div className={mask_style["mask-item"]} key={mask.id}>
            <div className={mask_style["mask-header"]}>
                <div className={mask_style["mask-icon"]}>
                    <BotIcon/>
                </div>
                <div className={mask_style["mask-title"]}>
                    <div className={mask_style["mask-name"]}>{mask.name}</div>
                    <div className={mask_style["mask-info"] + " one-line"}>
                        {mask.model}
                    </div>
                </div>
            </div>
            <div className={mask_style["mask-actions"]}>
                <IconButton
                    icon={<AddIcon/>}
                    text={"对话"}
                    onClick={() => {
                        console.log("new session")
                    }}
                />
                <IconButton
                    icon={<EditIcon/>}
                    text={"编辑"}
                    onClick={() => {
                        setEditingMask(true)
                        console.log("edit")
                    }}
                />
                <IconButton
                    icon={<DeleteIcon/>}
                    text={"删除"}
                    onClick={async () => {
                        await mask.drop(mask.id)
                    }}
                />
            </div>

            {
                editingMask && (
                    <Modal
                        title={"编辑预设面具"}
                        onClose={() => setEditingMask(false)}
                        actions={[
                            <IconButton
                                key={"export"}
                                icon={<DownloadIcon/>}
                                text={"下载"}
                                onClick={() => {
                                    console.log("下载")
                                }}
                            />,
                            <IconButton
                                key={"copy"}
                                icon={<CopyIcon/>}
                                text={"克隆"}
                                onClick={() => {
                                    console.log("克隆")
                                }}
                            />
                        ]}
                    >
                        <MaskSetting/>
                    </Modal>
                )
            }
        </div>
    )
}