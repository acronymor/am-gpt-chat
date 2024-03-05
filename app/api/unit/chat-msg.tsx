import chat_msg_style from "@/app/api/unit/chat-msg.module.scss"
import chat_input_style from "@/app/api/unit/chat-input.module.scss"
import {IconButton} from "@/app/api/unit/button";
import EditIcon from "@/app/icons/rename.svg"

export function ChatMsg(props: {
    role: string,
}) {
    return (
        <div>
            <div className={chat_msg_style["chat-message-container"]}>
                <div className={chat_msg_style["chat-message-header"]}>
                    <div className={chat_msg_style["chat-message-avatar"]}>
                        <div className={chat_msg_style["chat-message-edit"]}>
                            <IconButton
                                icon={<EditIcon/>}
                            />
                        </div>
                        <div>
                            {props.role == "user" ? "USER" : "SYSTEM"}
                        </div>
                    </div>
                    <div className={chat_msg_style["chat-message-actions"]}>
                        <div className={chat_input_style["chat-input-actions"]}>
                            <div>Retry</div>
                            <div>Reset</div>
                            <div>Delete</div>
                            <div>Pin</div>
                            <div>Coy</div>
                        </div>
                    </div>
                </div>

                <div className={chat_msg_style["chat-message-status"]}>
                    Typing
                </div>

                <div className={chat_msg_style["chat-message-item"]}>
                    Markdown Message
                </div>
                <div className={chat_msg_style["chat-message-action-date"]}>
                    88:88:88
                </div>
            </div>
        </div>
    )
}