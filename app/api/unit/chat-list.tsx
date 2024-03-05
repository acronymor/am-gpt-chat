import {ChatItem} from "@/app/api/unit/chat-item";

export function ChatList(props: { narrow?: boolean }) {
    return (
        <div>
            <div>
                <ChatItem title={"title1"}/>
                <ChatItem title={"title2"}/>
                <ChatItem title={"title3"}/>
            </div>
        </div>
    )
}