import {ChatItem} from "@/app/api/unit/chat-item";
import Link from "next/link";

const links = [
    {name: 'title1', href: `/api/unit/chat/1`},
    {name: 'title2', href: '/api/unit/chat/2'},
    {name: 'title3', href: '/api/unit/chat/3'},
]

export function ChatList(props: { narrow?: boolean }) {
    return (
        <div>
            {links.map((link) => {
                return (
                    <Link key={link.name} href={link.href}>
                        <ChatItem title={link.name}/>
                    </Link>
                )
            })}
        </div>
    )
}