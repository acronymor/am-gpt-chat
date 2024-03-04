import sidebar_style from "@/app/api/unit/sidebar.module.scss"
import ChatGptIcon from "@/app/icons/chatgpt.svg"
import MaskIcon from "@/app/icons/mask.svg"
import PluginIcon from "@/app/icons/plugin.svg"
import SettingsIcon from "@/app/icons/settings.svg";
import GithubIcon from "@/app/icons/github.svg";
import AddIcon from "@/app/icons/add.svg";
import {IconButton} from "@/app/api/unit/button";

export function Sidebar(props: { className?: string }) {
    return (
        <div className={sidebar_style["sidebar"]}>
            <div className={sidebar_style["sidebar-header"]}>
                <div className={sidebar_style["sidebar-title"]}>NextChat</div>
                <div className={sidebar_style["sidebar-sub-title"]}>Build your own AI assistant.</div>
                <div className={sidebar_style["sidebar-logo"] + " no-dark"}><ChatGptIcon/></div>
            </div>

            <div className={sidebar_style["sidebar-header-bar"]}>
                <IconButton
                    className={sidebar_style["sidebar-bar-button"]}
                    icon={<MaskIcon/>}
                    text={"面具"}
                />
                <IconButton
                    className={sidebar_style["sidebar-bar-button"]}
                    icon={<PluginIcon/>}
                    text={"插件"}
                />
            </div>

            <div className={sidebar_style["sidebar-body"]}>
                <div>ChatList</div>
            </div>

            <div className={sidebar_style["sidebar-tail"]}>
                <div className={sidebar_style["sidebar-actions"]}>
                    <div className={sidebar_style["sidebar-action"]}>
                        <IconButton icon={<SettingsIcon/>}/>
                    </div>

                    <div className={sidebar_style["sidebar-action"]}>
                        <IconButton icon={<GithubIcon/>}/>
                    </div>

                </div>
                <div>
                    <div className={sidebar_style["sidebar-action"]}>
                        <IconButton
                            icon={<AddIcon/>}
                            text={"新的聊天"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}