'use client'

import {Chat} from "@/app/ui/unit/chat/[id]/chat";
import {useSearchParams} from "next/navigation";

export default function Page({params}: { params: { id: string } }) {
    const searchParams = useSearchParams()
    const title: string = searchParams.get("title") ?? "New Conversation"
    const cnt: number = Number(searchParams.get("cnt") ?? 0)
    return (
        <div className={"window-content"}>
            <Chat id={params.id} title={title} cnt={cnt}/>
        </div>
    )
}