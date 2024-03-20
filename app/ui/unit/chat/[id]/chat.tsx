import {ChatMsgList} from "@/app/ui/unit/chat/[id]/chat-msg-list";
import {ChatHeader} from "@/app/ui/unit/chat/[id]/chat-header";
import {ChatInput} from "@/app/ui/unit/chat/[id]/chat-input";
import chat_style from "@/app/ui/unit/chat/[id]/chat.module.scss"

export function Chat(props: {
    id: string,
    title: string,
    cnt: number
}) {
    return (
        <div className={chat_style["chat"]}>
            <ChatHeader title={props.title} cnt={props.cnt}/>
            <ChatMsgList/>
            <ChatInput/>
        </div>
    )
}