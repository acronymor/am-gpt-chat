import chat_style from '@/app/api/unit/chat.module.scss'

export function Chat() {
    return (
        <div className={chat_style.chat}>
            <div className={"window-header"}>
                <div className={"window-header-title"}>
                    <div className={"window-header-main-title"}>
                        New Conversation
                    </div>
                    <div className={"window-header-sub-title"}>
                        999 messages
                    </div>
                </div>
                <div className={"window-actions"}>
                    <div className={"window-action-button"}>Rename</div>
                    <div className={"window-action-button"}>Export</div>
                    <div className={"window-action-button"}>Max/Min</div>
                </div>
            </div>


            <div className={chat_style["chat"]}>
                Chat Body
            </div>

            <div className={chat_style["chat-input-panel"]}>
                <div className={chat_style["chat-input-actions"]}>
                    <div className={chat_style["chat-input-action"]}>Settings</div>
                    <div className={chat_style["chat-input-action"]}>Prompt</div>
                    <div className={chat_style["chat-input-action"]}>Masks</div>
                    <div className={chat_style["chat-input-action"]}>Clear</div>
                </div>

                <div className={chat_style["chat-input-panel-inner"]}>
                    <textarea
                        className={chat_style["chat-input"]}
                        placeholder="Ctrl + Enter to send, / to search prompts, :to use commands"
                        rows={8}
                    />
                </div>
            </div>
        </div>
    )
}