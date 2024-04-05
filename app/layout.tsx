'use client'

import type {Viewport} from "next";
import "@/app/styles/globals.scss"
import {Sidebar} from "@/app/unit/chat/sidebar";
import style from "@/app/main.module.scss"
import {useAppConfigStore} from "@/app/store/setting";
import {useEffect} from "react";


export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "#fafafa"},
        {media: "(prefers-color-scheme: dark)", color: "#151515"},
    ],
}

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const store = useAppConfigStore()
    useEffect(() => {
        async function go() {
            await store.get()
        }

        go().catch(console.error)
    }, []);
    return (
        <html lang="en">
        <body className={store.theme}>
        <div className={style["container"]}>
            <Sidebar/>
            {children}
        </div>
        </body>
        </html>
    );
}
