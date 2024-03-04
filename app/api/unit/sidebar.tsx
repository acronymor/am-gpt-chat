import sidebar_style from "@/app/api/unit/sidebar.module.scss"
import ChatGptIcon from "@/app/icons/chatgpt.svg"
import MaskIcon from "@/app/icons/mask.svg"
import PluginIcon from "@/app/icons/plugin.svg"
import SettingsIcon from "@/app/icons/settings.svg";
import GithubIcon from "@/app/icons/github.svg";
import AddIcon from "@/app/icons/add.svg";

export function Sidebar(props: { className?: string }) {
    return (
        <div className={sidebar_style["sidebar"]}>
            <div className={sidebar_style["sidebar-header"]}>
                <div className={sidebar_style["sidebar-title"]}>NextChat</div>
                <div className={sidebar_style["sidebar-sub-title"]}>Build your own AI assistant.</div>
                <div className={sidebar_style["sidebar-logo"] + " no-dark"}><ChatGptIcon/></div>
            </div>

            <div className={sidebar_style["sidebar-header-bar"]}>
                <div className={sidebar_style["sidebar-bar-button"]}><MaskIcon/></div>
                <div className={sidebar_style["sidebar-bar-button"]}><PluginIcon/></div>
            </div>

            <div className={sidebar_style["sidebar-body"]}>
                <div>ChatList</div>
            </div>

            <div className={sidebar_style["sidebar-tail"]}>
                <div className={sidebar_style["sidebar-actions"]}>
                    <div className={sidebar_style["sidebar-action"]}><SettingsIcon/></div>
                    <div className={sidebar_style["sidebar-action"]}><GithubIcon/></div>
                    <div className={sidebar_style["sidebar-action"]}><AddIcon/></div>
                </div>
            </div>
        </div>
    )
}