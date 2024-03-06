import {ChatMsgList} from "@/app/api/unit/chat-msg-list";
import {ChatHeader} from "@/app/api/unit/chat-header";
import {ChatInput} from "@/app/api/unit/chat-input";
import chat_style from "@/app/api/unit/chat.module.scss"

export function Chat() {
    return (
        <div className={chat_style.chat}>
            <ChatHeader/>
            <ChatMsgList/>
            <ChatInput/>
        </div>
    )
}