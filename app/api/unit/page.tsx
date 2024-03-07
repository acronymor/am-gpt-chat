'use client'

import {useEffect} from "react";
import {useRouter} from "next/navigation";

const links = {name: 'chat', href: "/api/unit/chat"}

export default function Home() {
    const router = useRouter()
    useEffect(() => {
        router.push(links.href);
    });
}