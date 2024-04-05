import React from "react";

import {getAllMask} from "@/app/ui/util/mask_util";
import mask_style from "@/app/ui/unit/mask/mask.module.scss"
import {MaskHeader} from "@/app/ui/unit/mask/mask-header";
import {MaskBar} from "@/app/ui/unit/mask/mask-bar";
import {MaskBody} from "@/app/ui/unit/mask/mask-body";

export default async function Page({params}: { params?: { query?: string; page?: string; } }) {
    const masks = await getAllMask()

    return (
        <div className={"window-content"}>
            <div className={mask_style["mask-page"]}>
                <MaskHeader count={masks.length}/>

                <div className={mask_style["mask-page-body"]}>
                    <MaskBar/>
                    <div>
                        {masks.map((mask, index) => (<MaskBody key={index} mask={mask}/>))}
                    </div>
                </div>
            </div>
        </div>
    )
}
