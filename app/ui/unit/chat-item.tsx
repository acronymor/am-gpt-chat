import chat_item_style from "@/app/ui/unit/chat-item.module.scss"
import DeleteIcon from "@/app/icons/delete.svg";


export function ChatItem(props: {
    onClick?: () => void,
    onDelete?: () => void,
    title: string,
    cnt: number,
    time: string,
}) {
    return (
        <div>
            <div className={chat_item_style["chat-item"]} onClick={props.onClick}>
                <div className={chat_item_style["chat-item-title"]}>{props.title}</div>
                <div className={chat_item_style["chat-item-info"]}>
                    <div className={chat_item_style["chat-item-count"]}>
                        {props.cnt}
                    </div>
                    <div className={chat_item_style["chat-item-date"]}>99:99:99</div>
                </div>
                <div className={chat_item_style["chat-item-delete"]} onClickCapture={(e) => {
                    props.onDelete?.();
                    e.preventDefault();
                    e.stopPropagation();
                }}>
                    <DeleteIcon/>
                </div>
            </div>
        </div>
    )
}