import sidebar_style from "@/app/api/unit/sidebar.module.scss"
import ChatGptIcon from "@/app/icons/chatgpt.svg"

export function Sidebar(props: { className?: string }) {
    return (
        <div className={sidebar_style["sidebar"]}>
            <div className={sidebar_style["sidebar-header"]}>
                <div className={sidebar_style["sidebar-title"]}>NextChat</div>
                <div className={sidebar_style["sidebar-sub-title"]}>Build your own AI assistant.</div>
                <div className={sidebar_style["sidebar-logo"] + " no-dark"}><ChatGptIcon/></div>
            </div>

            <div className={sidebar_style["sidebar-header-bar"]}>
                <div>MASK</div>
                <div>PLUGIN</div>
            </div>

            <div className={sidebar_style["sidebar-body"]}>
                <div>ChatList</div>
            </div>

            <div className={sidebar_style["sidebar-tail"]}>
                <div className={sidebar_style["sidebar-actions"]}>
                    <div className={sidebar_style["sidebar-action"]}>ICON Setting</div>
                    <div className={sidebar_style["sidebar-action"]}>ICON Github</div>
                    <div className={sidebar_style["sidebar-action"]}>New Chat</div>
                </div>
            </div>
        </div>
    )
}