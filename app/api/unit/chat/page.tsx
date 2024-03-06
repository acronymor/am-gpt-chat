import chat_style from "@/app/api/unit/chat/[id]/chat.module.scss";

export default function Page() {
    return (
        <div className={"window-content"}>
            <div className={chat_style["chat"]}
                 style={{"justifyContent": "center", "alignItems": "center",} as React.CSSProperties}>
                <h1>Am Gpt Chat</h1>
            </div>
        </div>
    )
}