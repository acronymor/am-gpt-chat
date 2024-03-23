import {useEffect, useState} from "react";
import {IconButton} from "@/app/ui/lib/button";
import RenameIcon from "@/app/icons/rename.svg";
import ShareIcon from "@/app/icons/share.svg";
import {ChatSession, useChatStore} from "@/app/store/chat";

function HeaderTitle(props: { session: ChatSession, callback: (topic: string) => void }) {
    const [isEditing, setIsEditing] = useState(false);

    const [topic, setTopic] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTopic(props.session.topic)
        setCount(props.session.messages.length)
    }, [props.session.messages]);

    return (
        <div className={"window-header-title"}>
            <div className={"window-header-main-title"} onDoubleClick={() => {
                setIsEditing(true)
            }}>
                {isEditing ? (
                    <input
                        type="text"
                        defaultValue={props.session.topic}
                        onChangeCapture={(e) => {
                            const topic = e.currentTarget.value
                            props.callback(topic)
                        }}
                        onKeyDown={(e) => {
                            if (e.key == "Enter") {
                                setIsEditing(false)
                            }
                        }}
                        onBlur={() => setIsEditing(false)}
                    />
                ) : (
                    <span>{topic}</span>
                )}
            </div>
            <div className={"window-header-sub-title"}>
                {count} messages
            </div>
        </div>
    )
}

export function ChatHeader() {
    const [currentSession, changeSession] = useChatStore(
        (state) => [
            state.currentSession,
            state.changeSession
        ],
    );

    const updateTitle = (topic: string) => {
        const tmp = currentSession()
        tmp.topic = topic
        tmp.lastUpdate = Date.now()
        changeSession(tmp)
    }

    return (
        <div className={"window-header"}>
            <HeaderTitle session={currentSession()} callback={updateTitle}/>
            <div className={"window-actions"}>
                <div className={"window-action-button"}>
                    <IconButton icon={<RenameIcon/>}/>
                </div>
                <div className={"window-action-button"}>
                    <IconButton icon={<ShareIcon/>}/>
                </div>
            </div>
        </div>
    )
}