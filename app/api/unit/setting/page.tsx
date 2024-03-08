'use client'

import React from "react";

import {SetHeader} from "@/app/api/unit/setting/set-header";
import {SetList} from "@/app/api/unit/setting/set-list";


export default function Page() {
    return (
        <div className={"window-content"}>
            <SetHeader/>
            <SetList/>
        </div>
    )
}