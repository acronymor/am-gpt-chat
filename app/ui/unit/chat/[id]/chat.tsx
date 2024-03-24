import chat_style from "@/app/ui/unit/chat/[id]/chat.module.scss"
import {ChatHeader} from "@/app/ui/unit/chat/[id]/chat-header";
import {ChatBody} from "@/app/ui/unit/chat/[id]/chat-body";

export function Chat() {
    return (
        <div className={chat_style["chat"]}>
            <ChatHeader/>
            <ChatBody/>
        </div>
    );
}