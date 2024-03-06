import {ChatMsgList} from "@/app/api/unit/chat/[id]/chat-msg-list";
import {ChatHeader} from "@/app/api/unit/chat/[id]/chat-header";
import {ChatInput} from "@/app/api/unit/chat/[id]/chat-input";
import chat_style from "@/app/api/unit/chat/[id]/chat.module.scss"

export function Chat(props: {
    id: number,
}) {
    console.log(props.id)
    return (
        <div className={chat_style["chat"]}>
            <ChatHeader/>
            <ChatMsgList/>
            <ChatInput/>
        </div>
    )
}