import React, {useEffect, useRef} from "react";

import chat_item_style from "@/app/unit/chat/chat-item.module.scss"
import DeleteIcon from "@/app/icons/delete.svg";


export function ChatItem(props: {
    onClick?: () => void,
    onDelete?: () => void,
    id: string,
    index: number,
    selected: boolean,
    title: string,
    cnt: number,
    time: string,
}) {
    const draggableRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (props.selected && draggableRef.current) {
            draggableRef.current?.scrollIntoView({
                block: "center",
            });
        }
    }, [props.selected]);
    return (
        <div
            className={`${chat_item_style["chat-item"]} ${props.selected && chat_item_style["chat-item-selected"]}`}
            onClick={props.onClick}

            title={`${props.title} ${props.cnt}`}
        >
            <div className={chat_item_style["chat-item-title"]}>{props.title}</div>
            <div className={chat_item_style["chat-item-info"]}>
                <div className={chat_item_style["chat-item-count"]}>
                    {props.cnt}
                </div>
                <div className={chat_item_style["chat-item-date"]}>{props.time}</div>
            </div>
            <div className={chat_item_style["chat-item-delete"]} onClickCapture={(e) => {
                props.onDelete?.();
                e.preventDefault();
                e.stopPropagation();
            }}>
                <DeleteIcon/>
            </div>

        </div>
    )
}