import {useEffect, useState} from "react";

import {ChatSession, useChatStore} from "@/app/store/chat";
import {ChatMsg} from "@/app/ui/unit/chat/[id]/chat-msg";
import chat_style from "@/app/ui/unit/chat/[id]/chat.module.scss";


export function ChatMsgList() {
    const [currentSession, changeSession] = useChatStore(
        (state) => [
            state.currentSession,
            state.changeSession
        ],
    );

    const [session, setSession] = useState<ChatSession>()
    useEffect(() => {
        setSession(currentSession())
    }, []);

    return (
        <div className={chat_style["chat-body"]}>
            {
                session?.messages.map(t => (
                    <ChatMsg key={t.id} chat={t}/>
                ))
            }
        </div>
    )
}