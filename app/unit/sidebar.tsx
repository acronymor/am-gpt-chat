'use client'

import React from "react";
import {useRouter} from "next/navigation";

import {IconButton} from "@/app/ui/lib/button";
import {IconLink} from "@/app/ui/lib/link";
import {ChatList} from "@/app/unit/chat/chat-list";
import {useChatStore} from "@/app/store/chat";

import sidebar_style from "@/app/unit/sidebar.module.scss"
import ChatGptIcon from "@/app/icons/chatgpt.svg"
import MaskIcon from "@/app/icons/mask.svg"
import PluginIcon from "@/app/icons/plugin.svg"
import SettingsIcon from "@/app/icons/settings.svg";
import GithubIcon from "@/app/icons/github.svg";
import AddIcon from "@/app/icons/add.svg";

export function Sidebar(props: { className?: string }) {
    const store = useChatStore()
    const router = useRouter()


    return (
        <div className={sidebar_style["sidebar"]}>
            <IconLink href={{pathname: "/unit/chat"}}>
                <div className={sidebar_style["sidebar-header"]}>
                    <div className={sidebar_style["sidebar-title"]}>NextChat</div>
                    <div className={sidebar_style["sidebar-sub-title"]}>Build your own AI assistant.</div>
                    <div className={sidebar_style["sidebar-logo"] + " no-dark"}><ChatGptIcon/></div>
                </div>
            </IconLink>

            <div className={sidebar_style["sidebar-header-bar"]}>
                <IconButton
                    className={sidebar_style["sidebar-bar-button"]}
                    icon={<MaskIcon/>}
                    text={"Mask"}
                    onClick={() => {
                        router.push('/unit/mask')
                    }}
                />
                <IconButton
                    className={sidebar_style["sidebar-bar-button"]}
                    icon={<PluginIcon/>}
                    text={"Plugin"}
                    onClick={() => {
                        router.push('/unit/mask')
                    }}
                />
            </div>

            <div className={sidebar_style["sidebar-body"]}>
                <ChatList/>
            </div>

            <div className={sidebar_style["sidebar-tail"]}>
                <div className={sidebar_style["sidebar-actions"]}>
                    <div className={sidebar_style["sidebar-action"]}>
                        <IconLink href={{pathname: "/unit/setting"}}>
                            <IconButton icon={<SettingsIcon/>}/>
                        </IconLink>
                    </div>

                    <div className={sidebar_style["sidebar-action"]}>
                        <IconButton icon={<GithubIcon/>}/>
                    </div>

                </div>
                <div>
                    <div className={sidebar_style["sidebar-action"]}>
                        <IconLink href={{pathname: `/unit/chat/${store.sessions.length}`}}>
                            <IconButton
                                icon={<AddIcon/>}
                                text={"新的聊天"}
                                onClick={() => {
                                    store.newSession()
                                }}
                            />
                        </IconLink>
                    </div>
                </div>
            </div>
        </div>
    )
}