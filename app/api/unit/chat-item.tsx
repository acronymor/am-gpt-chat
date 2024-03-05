import chat_item_style from "@/app/api/unit/chat-item.module.scss"

export function ChatItem(props: {
    title: string,
}) {
    return (
        <div>
            <div className={chat_item_style["chat-item"]}>
                <div className={chat_item_style["chat-item-title"]}>{props.title}</div>
                <div className={chat_item_style["chat-item-info"]}>
                    <div className={chat_item_style["chat-item-count"]}>
                        888
                    </div>
                    <div className={chat_item_style["chat-item-date"]}>99:99:99</div>
                </div>
            </div>
        </div>
    )
}