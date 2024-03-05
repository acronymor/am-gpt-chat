import chat_input_style from "@/app/api/unit/chat-input.module.scss"

export function IconChatAction(props: {
    icon?: JSX.Element
    text?: string
}) {
    return (
        <div className={chat_input_style["chat-input-action"] + " clickable"}>
            <div> {props.icon} </div>
            <div> {props.text} </div>
        </div>
    )
}