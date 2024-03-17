'use client'

import React, {useEffect} from "react";

import {SetHeader} from "@/app/ui/unit/setting/set-header";
import {SetList} from "@/app/ui/unit/setting/set-list";
import {useAppConfigStore} from "@/app/store/setting";


export default function Page() {
    const store = useAppConfigStore()
    useEffect(() => {
        store.init()
    }, []);

    useEffect(() => {
        store.save(store.getAll());
    }, [store.lastUpdateTime]);

    return (
        <div className={"window-content"}>
            <SetHeader/>
            <SetList/>
        </div>
    )
}