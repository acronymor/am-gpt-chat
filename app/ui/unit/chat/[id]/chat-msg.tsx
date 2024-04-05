import {IconButton} from "@/app/ui/lib/button";

import chat_msg_style from "@/app/ui/unit/chat/[id]/chat-msg.module.scss"

import EditIcon from "@/app/icons/rename.svg"
import BotIcon from "@/app/icons/bot.svg"
import AvatarIcon from "@/app/icons/avatar.svg"
import {Message} from "ai";
import {ChatActionBar} from "@/app/ui/unit/chat/[id]/chat-action-bar";

export function ChatMsg(props: {
    chat: Message
}) {
    const time: string = new Date(props.chat.createdAt ?? Date.now()).toLocaleTimeString()

    return (
        <div
            className={props.chat.role == "user" ? chat_msg_style["chat-message-user"] : chat_msg_style["chat-message"]}>
            <div className={chat_msg_style["chat-message-container"]}>
                <div className={chat_msg_style["chat-message-header"]}>
                    <div className={chat_msg_style["chat-message-avatar"]}>
                        <div className={chat_msg_style["chat-message-edit"]}>
                            <IconButton
                                icon={<EditIcon/>}
                            />
                        </div>
                        <div>
                            {props.chat.role == "user" ? <AvatarIcon/> : <BotIcon/>}
                        </div>
                    </div>
                    <div className={chat_msg_style["chat-message-actions"]}>
                        <ChatActionBar message={props.chat}/>
                    </div>
                </div>

                <div className={chat_msg_style["chat-message-item"]}>
                    {props.chat.content}
                </div>
                <div className={chat_msg_style["chat-message-action-date"]}>
                    {time}
                </div>
            </div>
        </div>
    )
}