import type {Metadata} from "next";
import style from "@/app/unit/main.module.scss";
import {Sidebar} from "@/app/unit/sidebar";

export const metadata: Metadata = {
    title: "Next Chat",
    description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className={style["container"]}>
            <Sidebar/>
            {children}
        </div>
    );
}
