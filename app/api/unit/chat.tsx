import chat_style from "@/app/api/unit/chat.module.scss"
import RenameIcon from "@/app/icons/rename.svg"
import ShareIcon from "@/app/icons/share.svg"
import MaxIcon from "@/app/icons/max.svg"
import MinIcon from "@/app/icons/min.svg"
import SendWhiteIcon from "@/app/icons/send-white.svg";
import SettingsIcon from "@/app/icons/settings.svg";
import AutoIcon from "@/app/icons/auto.svg";
import PromptIcon from "@/app/icons/prompt.svg";
import MaskIcon from "@/app/icons/mask.svg";
import BreakIcon from "@/app/icons/break.svg";
import RobotIcon from "@/app/icons/robot.svg";
import {IconButton} from "@/app/api/unit/button";

export function Chat() {
    return (
        <div className={chat_style.chat}>
            <div className={"window-header"}>
                <div className={"window-header-title"}>
                    <div className={"window-header-main-title"}>
                        New Conversation
                    </div>
                    <div className={"window-header-sub-title"}>
                        999 messages
                    </div>
                </div>
                <div className={"window-actions"}>
                    <div className={"window-action-button"}>
                        <IconButton icon={<RenameIcon/>}/>
                    </div>
                    <div className={"window-action-button"}>
                        <IconButton icon={<ShareIcon/>}/>
                    </div>
                    <div className={"window-action-button"}>
                        <IconButton icon={<MaxIcon/>}/>
                    </div>
                    <div className={"window-action-button"}>
                        <IconButton icon={<MinIcon/>}/>
                    </div>
                </div>
            </div>


            <div className={chat_style["chat"]}>
                Chat Body
            </div>

            <div className={chat_style["chat-input-panel"]}>
                <div className={chat_style["chat-input-actions"]}>
                    <div className={chat_style["chat-input-action"]}><SettingsIcon/></div>
                    <div className={chat_style["chat-input-action"]}><AutoIcon/></div>
                    <div className={chat_style["chat-input-action"]}><PromptIcon/></div>
                    <div className={chat_style["chat-input-action"]}><MaskIcon/></div>
                    <div className={chat_style["chat-input-action"]}><BreakIcon/></div>
                    <div className={chat_style["chat-input-action"]}><RobotIcon/></div>
                </div>

                <div className={chat_style["chat-input-panel-inner"]}>
                    <textarea
                        className={chat_style["chat-input"]}
                        placeholder="Ctrl + Enter to send, / to search prompts, :to use commands"
                        rows={8}
                    />
                    <IconButton
                        className={chat_style["chat-input-send"]}
                        icon={<SendWhiteIcon/>}
                        text={"Send"}
                    />
                </div>
            </div>
        </div>
    )
}