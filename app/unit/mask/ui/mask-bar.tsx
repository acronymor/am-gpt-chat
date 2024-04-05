'use client'

import mask_style from "@/app/unit/mask/mask.module.scss";
import React from "react";
import {IconButton} from "@/app/ui/lib/button";
import AddIcon from "@/app/icons/add.svg"

export function MaskBar() {
    return (
        <div className={mask_style["mask-filter"]}>
            <input
                type="text"
                className={mask_style["search-bar"]}
                placeholder={"搜索"}
                autoFocus
                onInput={(e) => {
                    console.log(`搜索=${e.currentTarget.value}`)
                }}
            />
            <IconButton
                className={mask_style["mask-create"]}
                icon={<AddIcon/>}
                text={"新建"}
                onClick={() => {
                    console.log("新建")
                }}
            />
        </div>
    )
}