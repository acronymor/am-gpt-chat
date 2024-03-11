import {General} from "@/app/ui/unit/setting/general";
import {ChatGpt} from "@/app/ui/unit/setting/chatgpt";
import {Danger} from "@/app/ui/unit/setting/danger";

import set_style from "@/app/ui/unit/setting/set.module.scss"
import {useEffect, useState} from "react";


export function SetList() {
    const [data, setData] = useState<any>()
    useEffect(() => {
        fetch('/api/setting', {method: "GET", cache: "no-cache"})
            .then((res) => res.json())
            .then((data) => {
                if (data["code"] == 200) {
                    let cfg: { [key: string]: any } = {}
                    for (let llm of data?.data?.llm) {
                        cfg[llm?.model] = llm;
                    }
                    setData(cfg)
                } else {
                    throw new Error("Error Setting")
                }
            }).catch((e) => {
            console.error(e)
        })
    }, [])

    if (!data) {
        return;
    }

    return (
        <div className={set_style["settings"]}>
            <General/>
            <ChatGpt enabled={data?.chatgpt?.isEnabled} config={data?.chatgpt?.config}/>
            <Danger/>
        </div>
    )
}