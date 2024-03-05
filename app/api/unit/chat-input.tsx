import chat_input_style from "@/app/api/unit/chat-input.module.scss";
import SettingsIcon from "@/app/icons/settings.svg";
import AutoIcon from "@/app/icons/auto.svg";
import PromptIcon from "@/app/icons/prompt.svg";
import MaskIcon from "@/app/icons/mask.svg";
import BreakIcon from "@/app/icons/break.svg";
import RobotIcon from "@/app/icons/robot.svg";
import {IconButton} from "@/app/api/unit/button";
import SendWhiteIcon from "@/app/icons/send-white.svg";

export function ChatInput() {
    return (
        <div className={chat_input_style["chat-input-panel"]}>
            <div className={chat_input_style["chat-input-actions"]}>
                <div className={chat_input_style["chat-input-action"]}><SettingsIcon/></div>
                <div className={chat_input_style["chat-input-action"]}><AutoIcon/></div>
                <div className={chat_input_style["chat-input-action"]}><PromptIcon/></div>
                <div className={chat_input_style["chat-input-action"]}><MaskIcon/></div>
                <div className={chat_input_style["chat-input-action"]}><BreakIcon/></div>
                <div className={chat_input_style["chat-input-action"]}><RobotIcon/></div>
            </div>

            <div className={chat_input_style["chat-input-panel-inner"]}>
                    <textarea
                        className={chat_input_style["chat-input"]}
                        placeholder="Ctrl + Enter to send, / to search prompts, :to use commands"
                        rows={8}
                    />
                <IconButton
                    className={chat_input_style["chat-input-send"]}
                    icon={<SendWhiteIcon/>}
                    text={"Send"}
                />
            </div>
        </div>
    )
}