import {useState} from "react";
import {IconButton} from "@/app/ui/lib/button";
import RenameIcon from "@/app/icons/rename.svg";
import ShareIcon from "@/app/icons/share.svg";
import {useChatStore} from "@/app/store/chat";

export function ChatHeader(props: { id: number }) {
    const [sessions, currentSession] = useChatStore(
        (state) => [
            state.sessions,
            state.currentSession
        ],
    );

    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className={"window-header"}>
            <div className={"window-header-title"}>
                <div className={"window-header-main-title"} onDoubleClick={() => {
                    setIsEditing(true)
                }}>
                    {isEditing ? (
                        <input
                            type="text"
                            defaultValue={currentSession().topic}
                            onChangeCapture={(e) => {
                                sessions[props.id].topic = e.currentTarget.value
                            }}
                            onBlur={() => setIsEditing(false)}
                        />
                    ) : (
                        <span>{currentSession().topic}</span>
                    )}
                </div>
                <div className={"window-header-sub-title"}>
                    {currentSession().messages.length} messages
                </div>
            </div>
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