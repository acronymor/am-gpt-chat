'use client'

import select_style from "@/app/ui/lib/select.module.scss";
import DownIcon from "@/app/icons/down.svg";
import React, {useState} from "react";

export function Select({uKey, uValue, update, children}: {
    uKey: string,
    uValue: string,
    update: (key: string, value: string) => Promise<void>,
    children: React.ReactNode
}) {
    const [state, setState] = useState<string>(uValue)

    return (
        <div className={`${select_style["select-with-icon"]}`}>
            <select className={select_style["select-with-icon-select"]}
                    value={state ?? uValue}
                    onChange={async (e) => {
                        setState(e.currentTarget.value)
                        await update(uKey, e.currentTarget.value)
                    }}>
                {children}
            </select>
            <DownIcon className={select_style["select-with-icon-icon"]}/>
        </div>
    )
}