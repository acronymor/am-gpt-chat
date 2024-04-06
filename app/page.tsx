import {redirect} from "next/navigation";

const links = {name: 'chat', href: "/unit/chat"}

export default function App() {
    redirect(links.href)
}