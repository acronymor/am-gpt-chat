import {ChatItem} from "@/app/api/unit/chat-item";
import {IconLink} from "@/app/api/unit/link";

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
                    <IconLink key={link.name} href={link.href}>
                        <ChatItem title={link.name}/>
                    </IconLink>
                )
            })}
        </div>
    )
}