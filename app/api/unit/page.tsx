import home_style from "@/app/api/unit/home.module.scss"

import {Sidebar} from "@/app/api/unit/sidebar";
import {Chat} from "@/app/api/unit/chat";

export default function Home() {
    return (
        <div className={home_style["container"]}>
            <Sidebar/>
            <div className={"window-content"}>
                <Chat/>
            </div>
        </div>
    )
}