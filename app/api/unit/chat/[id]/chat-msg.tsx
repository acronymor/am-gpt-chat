import {IconButton} from "@/app/api/lib/button";
import {IconChatAction} from "@/app/api/unit/chat/[id]/chat-action";

import chat_msg_style from "@/app/api/unit/chat/[id]/chat-msg.module.scss"
import chat_input_style from "@/app/api/unit/chat/[id]/chat-input.module.scss"

import EditIcon from "@/app/icons/rename.svg"
import ResetIcon from "@/app/icons/reload.svg";
import DeleteIcon from "@/app/icons/clear.svg";
import PinIcon from "@/app/icons/pin.svg";
import CopyIcon from "@/app/icons/copy.svg";
import BotIcon from "@/app/icons/bot.svg"
import AvatarIcon from "@/app/icons/avatar.svg"

export function ChatMsg(props: {
    role: string,
}) {
    return (
        <div className={props.role == "user" ? chat_msg_style["chat-message-user"] : chat_msg_style["chat-message"]}>
            <div className={chat_msg_style["chat-message-container"]}>
                <div className={chat_msg_style["chat-message-header"]}>
                    <div className={chat_msg_style["chat-message-avatar"]}>
                        <div className={chat_msg_style["chat-message-edit"]}>
                            <IconButton
                                icon={<EditIcon/>}
                            />
                        </div>
                        <div>
                            {props.role == "user" ? <AvatarIcon/> : <BotIcon/>}
                        </div>
                    </div>
                    <div className={chat_msg_style["chat-message-actions"]}>
                        <div className={chat_input_style["chat-input-actions"]}>
                            <IconChatAction icon={<ResetIcon/>} text={"Retry"}/>
                            <IconChatAction icon={<DeleteIcon/>} text={"Delete"}/>
                            <IconChatAction icon={<PinIcon/>} text={"Pin"}/>
                            <IconChatAction icon={<CopyIcon/>} text={"Copy"}/>
                        </div>
                    </div>
                </div>

                <div className={chat_msg_style["chat-message-status"]}>
                    Typing
                </div>

                <div className={chat_msg_style["chat-message-item"]}>
                    {props.role == "user" ? "User" : "System"} Markdown Message
                </div>
                <div className={chat_msg_style["chat-message-action-date"]}>
                    88:88:88
                </div>
            </div>
        </div>
    )
}