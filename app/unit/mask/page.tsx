import React from "react";

import {deleteMaskById, getAllMask} from "@/app/unit/mask/lib/data";
import mask_style from "@/app/unit/mask/mask.module.scss"
import {MaskHeader} from "@/app/unit/mask/ui/mask-header";
import {MaskBar} from "@/app/unit/mask/ui/mask-bar";
import {MaskBody} from "@/app/unit/mask/ui/mask-body";
import {revalidatePath} from "next/cache";

export default async function Page({params}: { params?: { query?: string; page?: string; } }) {
    const masks = await getAllMask()

    const deleteById = async (id: number) => {
        'use server'

        await deleteMaskById(id)
        revalidatePath('/unit/mask');
    }

    return (
        <div className={"window-content"}>
            <div className={mask_style["mask-page"]}>
                <MaskHeader count={masks.length}/>

                <div className={mask_style["mask-page-body"]}>
                    <MaskBar/>
                    <div>
                        {
                            masks.map((mask, index) => (
                                <MaskBody
                                    key={index}
                                    mask={mask}
                                    drop={deleteById}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
