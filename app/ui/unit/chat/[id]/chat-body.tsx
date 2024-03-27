import {useEffect, useRef, useState} from "react";
import {useChat} from 'ai/react';

import {ChatMsg} from "@/app/ui/unit/chat/[id]/chat-msg";
import {IconButton} from "@/app/ui/lib/button";
import SettingsIcon from "@/app/icons/settings.svg";
import AutoIcon from "@/app/icons/auto.svg";
import PromptIcon from "@/app/icons/prompt.svg";
import MaskIcon from "@/app/icons/mask.svg";
import BreakIcon from "@/app/icons/break.svg";
import RobotIcon from "@/app/icons/robot.svg";
import SendWhiteIcon from "@/app/icons/send-white.svg";

import chat_style from "@/app/ui/unit/chat/[id]/chat.module.scss"
import chat_input_style from "@/app/ui/unit/chat/[id]/chat-input.module.scss";
import {ChatSession, useChatStore} from "@/app/store/chat";

export function ChatBody() {
    const [currentSession, changeSession] = useChatStore(
        (state) => [
            state.currentSession,
            state.changeSession
        ],
    );
    const [session, setSession] = useState<ChatSession>()
    const {messages, input, isLoading, handleInputChange, handleSubmit, stop} = useChat({
        api: "/api/chat",
    });
    const [last, setLast] = useState<number>(-1)
    useEffect(() => {
        setSession(currentSession())
        if (last + 1 == messages.length || messages[messages.length - 1] == undefined) {
            return
        }

        let tmp = session ?? currentSession()
        tmp.messages.push(messages[messages.length - 1])
        setLast(last + 1)
        changeSession(tmp);
    }, [messages.length]);

    useEffect(() => {
        if (messages[messages.length - 1] == null) {
            return
        }

        let tmp = session ?? currentSession()
        tmp.messages[tmp.messages.length - 1] = messages[messages.length - 1]
        changeSession(tmp);
    }, [messages[messages.length - 1]]);

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
    }, [last]);

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
                <div className={chat_input_style["chat-input-actions"]}>
                    <div className={chat_input_style["chat-input-action"]}><SettingsIcon/></div>
                    <div className={chat_input_style["chat-input-action"]}><AutoIcon/></div>
                    <div className={chat_input_style["chat-input-action"]}><PromptIcon/></div>
                    <div className={chat_input_style["chat-input-action"]}><MaskIcon/></div>
                    <div className={chat_input_style["chat-input-action"]}><BreakIcon/></div>
                    <div className={chat_input_style["chat-input-action"]}><RobotIcon/></div>
                </div>

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