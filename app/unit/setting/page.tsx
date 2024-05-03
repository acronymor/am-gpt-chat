import {SetHeader} from "@/app/unit/setting/set-header";
import {General} from "@/app/unit/setting/general";
import {Danger} from "@/app/unit/setting/danger";
import Llm from "@/app/unit/setting/llm";
import set_style from "@/app/unit/setting/set.module.scss"

export default async function Page() {
    return (
        <div className={"window-content"}>
            <SetHeader/>
            <div className={set_style["settings"]}>
                <General/>
                <Llm/>
                <Danger/>
            </div>
        </div>
    )
}