import {General} from "@/app/api/unit/setting/general";
import {ChatGpt} from "@/app/api/unit/setting/chatgpt";
import {Danger} from "@/app/api/unit/setting/danger";

import set_style from "@/app/api/unit/setting/set.module.scss"

export function SetList() {
    return (
        <div className={set_style["settings"]}>
            <General/>
            <ChatGpt/>
            <Danger/>
        </div>
    )
}