import {ChatMsg} from "@/app/api/unit/chat-msg";
import chat_style from "@/app/api/unit/chat.module.scss";


export function ChatMsgList() {
    return (
        <div className={chat_style["chat-body"]}>
            <ChatMsg role={"user"}/>
            <ChatMsg role={"system"}/>
            <ChatMsg role={"user"}/>
        </div>
    )
}