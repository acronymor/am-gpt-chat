'use client'

import {Chat} from "@/app/ui/unit/chat/[id]/chat";

export default function Page({params}: { params: { id: number } }) {
    return (
        <div className={"window-content"}>
            <Chat id={params.id}/>
        </div>
    )
}