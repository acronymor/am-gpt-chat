import {Chat} from "@/app/unit/chat/[id]/chat";

export default function Page({params}: { params: { id: number } }) {
    return (
        <div className={"window-content"}>
            <Chat/>
        </div>
    )
}