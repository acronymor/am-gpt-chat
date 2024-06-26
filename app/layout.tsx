import type {Viewport} from "next";
import "@/app/ui/styles/globals.scss"
import useSetting from "@/app/unit/setting/lib/data";


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

export default async function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const {getSetting} = useSetting()
    const theme = (await getSetting()).theme

    return (
        <html lang="en">
        <body className={theme}>
        {children}
        </body>
        </html>
    );
}
