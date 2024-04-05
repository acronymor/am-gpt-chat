import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {useChat} from 'ai/react';

import {ChatMsg} from "@/app/ui/unit/chat/[id]/chat-msg";
import {IconButton} from "@/app/ui/lib/button";
import SendWhiteIcon from "@/app/icons/send-white.svg";

import chat_style from "@/app/ui/unit/chat/[id]/chat.module.scss"
import chat_input_style from "@/app/ui/unit/chat/[id]/chat-input.module.scss";
import {ChatSession, useChatStore} from "@/app/store/chat";
import {ChatInputBar} from "@/app/ui/unit/chat/[id]/chat-input-bar";

export function ChatBody() {
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

    const {messages, input, isLoading, handleInputChange, handleSubmit, stop} = useChat({
        api: "/api/chat",
        initialMessages: currentSession().messages
    });

    useLayoutEffect(() => {
        if (messages.length === 0) {
            return
        }

        let tmp = session ?? currentSession()
        if (tmp.messages.length === 0 && messages.length != 0) {
            tmp.messages.push(messages[messages.length - 1]);
            changeSession(tmp);
            return
        }

        if (tmp.messages[tmp.messages.length - 1].id === messages[messages.length - 1].id) {
            tmp.messages[tmp.messages.length - 1] = messages[messages.length - 1];
        } else {
            tmp.messages.push(messages[messages.length - 1]);
        }
        changeSession(tmp);
    }, [messages.length, messages[messages.length - 1]]);

    const scrollRef = useRef<HTMLDivElement>(null);

    function scrollToBottom() {
        const dom = scrollRef.current;
        if (dom) {
            requestAnimationFrame(() => {
                dom.scrollTo(0, dom.scrollHeight);
            });
        }
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    return (
        <>
            <div className={chat_style["chat-body"]} ref={scrollRef}>
                {
                    session?.messages.map(m => (
                        <ChatMsg key={m.id} chat={m}/>
                    ))
                }
            </div>

            <div className={chat_input_style["chat-input-panel"]}>
                <ChatInputBar/>

                <form onSubmit={handleSubmit} className={chat_input_style["chat-input-panel-inner"]}>
                    <textarea
                        className={chat_input_style["chat-input"]}
                        placeholder="Ctrl + Enter to send, / to search prompts, :to use commands"
                        rows={8}
                        value={input}
                        autoFocus={false}
                        onFocus={scrollToBottom}
                        onClick={scrollToBottom}
                        onChange={handleInputChange}
                        onKeyDown={(event) => {
                            if (event.key === "Enter" && event.ctrlKey && !isLoading) {
                                event.preventDefault();
                                const formEvent = new Event("submit", {bubbles: true, cancelable: true});
                                event.currentTarget.form?.dispatchEvent(formEvent);
                            }
                        }}
                    />
                    {!isLoading
                        ? (<IconButton
                            className={chat_input_style["chat-input-send"]}
                            icon={<SendWhiteIcon/>}
                            text={"Send"}
                            disabled={isLoading}
                        />)
                        : (<IconButton
                            className={chat_input_style["chat-input-send"]}
                            icon={<SendWhiteIcon/>}
                            text={"Stop"}
                            onClick={stop}
                        />)}
                </form>
            </div>
        </>
    )
}