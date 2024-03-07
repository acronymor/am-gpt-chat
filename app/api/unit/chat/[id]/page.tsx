'use client'

import {Chat} from "@/app/api/unit/chat/[id]/chat";

export default function Page({params}: { params: { id: string } }) {
    return (
        <div className={"window-content"}>
            <Chat id={params.id}/>
        </div>
    )
}