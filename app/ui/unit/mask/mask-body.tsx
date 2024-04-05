'use client'

import mask_style from "@/app/ui/unit/mask/mask.module.scss";
import React from "react";
import {MaskConfig} from "@/app/proto/mask";
import {IconButton} from "@/app/ui/lib/button";
import AddIcon from "@/app/icons/add.svg"
import EditIcon from "@/app/icons/edit.svg"
import DeleteIcon from "@/app/icons/delete.svg"
import BotIcon from "@/app/icons/bot.svg"

export function MaskBody(props: { key: number, mask: MaskConfig }) {
    return (
        <div className={mask_style["mask-item"]} key={props.mask.id}>
            <div className={mask_style["mask-header"]}>
                <div className={mask_style["mask-icon"]}>
                    <BotIcon/>
                </div>
                <div className={mask_style["mask-title"]}>
                    <div className={mask_style["mask-name"]}>{props.mask.name}</div>
                    <div className={mask_style["mask-info"] + " one-line"}>
                        {props.mask.config.modelName}
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
                        console.log("edit")
                    }}
                />
                <IconButton
                    icon={<DeleteIcon/>}
                    text={"删除"}
                    onClick={() => {
                        console.log("delete")
                    }}
                />
            </div>
        </div>
    )
}