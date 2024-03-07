import chat_item_style from "@/app/api/unit/chat-item.module.scss"
import DeleteIcon from "@/app/icons/delete.svg";


export function ChatItem(props: {
    title: string,
    cnt: number,
}) {
    return (
        <div>
            <div className={chat_item_style["chat-item"]}>
                <div className={chat_item_style["chat-item-title"]}>{props.title}</div>
                <div className={chat_item_style["chat-item-info"]}>
                    <div className={chat_item_style["chat-item-count"]}>
                        {props.cnt}
                    </div>
                    <div className={chat_item_style["chat-item-date"]}>99:99:99</div>
                </div>
                <div className={chat_item_style["chat-item-delete"]}>
                    <DeleteIcon/>
                </div>
            </div>
        </div>
    )
}