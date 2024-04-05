import chat_input_style from "@/app/ui/unit/chat/[id]/chat-input.module.scss";
import SettingsIcon from "@/app/icons/settings.svg";
import AutoIcon from "@/app/icons/auto.svg";
import PromptIcon from "@/app/icons/prompt.svg";
import MaskIcon from "@/app/icons/mask.svg";
import BreakIcon from "@/app/icons/break.svg";
import RobotIcon from "@/app/icons/robot.svg";

export function ChatInputBar() {
    return (
        <div className={chat_input_style["chat-input-actions"]}>
            <div className={chat_input_style["chat-input-action"]}><SettingsIcon/></div>
            <div className={chat_input_style["chat-input-action"]}><AutoIcon/></div>
            <div className={chat_input_style["chat-input-action"]}><PromptIcon/></div>
            <div className={chat_input_style["chat-input-action"]}><MaskIcon/></div>
            <div className={chat_input_style["chat-input-action"]}><BreakIcon/></div>
            <div className={chat_input_style["chat-input-action"]}><RobotIcon/></div>
        </div>
    )
}