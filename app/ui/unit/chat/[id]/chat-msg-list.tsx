import {ChatMsg} from "@/app/ui/unit/chat/[id]/chat-msg";
import chat_style from "@/app/ui/unit/chat/[id]/chat.module.scss";


export function ChatMsgList() {
    return (
        <div className={chat_style["chat-body"]}>
            <ChatMsg role={"user"}/>
            <ChatMsg role={"system"}/>
            <ChatMsg role={"user"}/>
        </div>
    )
}