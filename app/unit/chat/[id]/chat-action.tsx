import {useRef, useState, JSX} from "react";
import chat_input_style from "@/app/unit/chat/[id]/chat-input.module.scss"

export function IconChatAction(props: {
    icon?: JSX.Element
    text?: string
    onClick: () => void
}) {
    const iconRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState({full: 16, icon: 16,});

    function updateWidth() {
        if (!iconRef.current || !textRef.current) return;
        const getWidth = (dom: HTMLDivElement) => dom.getBoundingClientRect().width;
        const textWidth = getWidth(textRef.current);
        const iconWidth = getWidth(iconRef.current);
        setWidth({
            full: textWidth + iconWidth,
            icon: iconWidth,
        });
    }

    return (
        <div className={chat_input_style["chat-input-action"] + " clickable"}
             onClick={() => {
                 props.onClick();
             }}
             onMouseEnter={updateWidth}
             style={
                 {
                     "--icon-width": `${width.icon}px`,
                     "--full-width": `${width.full}px`,
                 } as React.CSSProperties
             }
        >
            <div className={chat_input_style["icon"]} ref={iconRef}> {props.icon} </div>
            <div className={chat_input_style["text"]} ref={textRef}> {props.text} </div>
        </div>
    )
}