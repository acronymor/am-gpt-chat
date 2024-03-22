import {useState} from "react";

import chat_input_style from "@/app/ui/unit/chat/[id]/chat-input.module.scss";
import SettingsIcon from "@/app/icons/settings.svg";
import AutoIcon from "@/app/icons/auto.svg";
import PromptIcon from "@/app/icons/prompt.svg";
import MaskIcon from "@/app/icons/mask.svg";
import BreakIcon from "@/app/icons/break.svg";
import RobotIcon from "@/app/icons/robot.svg";
import SendWhiteIcon from "@/app/icons/send-white.svg";
import {IconButton} from "@/app/ui/lib/button";
import {useChatStore} from "@/app/store/chat";

export function ChatInput() {
    const [userInput, setUserInput] = useState("");
    const chatStore = useChatStore()

    const doSubmit = (userInput: string) => {
        chatStore.onInput(userInput)
        setUserInput("")
    }

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
                    value={userInput}
                    autoFocus={false}
                    onKeyDown={(e) => {
                        if (e.key == "Enter" && e.ctrlKey) {
                            doSubmit(userInput);
                        }
                    }}
                    onInput={(e) => setUserInput(e.currentTarget.value)}
                />
                <IconButton
                    className={chat_input_style["chat-input-send"]}
                    icon={<SendWhiteIcon/>}
                    text={"Send"}
                    onClick={() => {
                        if (userInput.trim() === "") return
                        doSubmit(userInput)
                    }}
                />
            </div>
        </div>
    )
}