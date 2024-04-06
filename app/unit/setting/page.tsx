import {SetHeader} from "@/app/unit/setting/set-header";
import {General} from "@/app/unit/setting/general";
import {Danger} from "@/app/unit/setting/danger";
import {ChatGpt} from "@/app/unit/setting/chatgpt";
import set_style from "@/app/unit/setting/set.module.scss"

export default async function Page() {
    return (
        <div className={"window-content"}>
            <SetHeader/>
            <div className={set_style["settings"]}>
                <General/>
                <ChatGpt/>
                <Danger/>
            </div>
        </div>
    )
}