import {General} from "@/app/ui/unit/setting/general";
import {ChatGpt} from "@/app/ui/unit/setting/chatgpt";
import {Danger} from "@/app/ui/unit/setting/danger";

import set_style from "@/app/ui/unit/setting/set.module.scss"


export function SetList() {
    return (
        <div className={set_style["settings"]}>
            <General/>
            <ChatGpt/>
            <Danger/>
        </div>
    )
}