import React from "react";

import {List, ListItem} from "@/app/ui/lib/list";
import {IconButton} from "@/app/ui/lib/button";
import {Select} from "@/app/ui/lib/select";

export function General() {
    return (
        <List>
            <ListItem title={"头像"}>
                <IconButton text={"ICON"}/>
            </ListItem>

            <ListItem title={"当前版本: v1.0.0"} subTitle={"发现新版本: v1.0.1"}>
                <IconButton text={"前往更新"}/>
            </ListItem>

            <ListItem title={"发送键"}>
                <Select>
                    <option>Ctrl + Enter</option>
                    <option>Enter</option>
                </Select>
            </ListItem>

            <ListItem title={"主题"}>
                <Select>
                    <option>亮色</option>
                    <option>暗黑色</option>
                </Select>
            </ListItem>
        </List>

    )
}