'use client'

import {useEffect} from "react";
import {useRouter} from "next/navigation";

const links = {name: 'chat', href: "/ui/unit/chat"}

export default function App() {
    const router = useRouter()
    useEffect(() => {
        router.push(links.href);
    });
}