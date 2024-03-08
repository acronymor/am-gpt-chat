import React from "react";

import {IconButton} from "@/app/api/lib/button";
import {List, ListItem} from "@/app/api/lib/list";

export function Danger() {
    return (
        <List>
            <ListItem title={"重置所有设置"} subTitle={"重置所有设置项回默认值"}>
                <IconButton text={"立即重置"}/>
            </ListItem>

            <ListItem title={"清除所有数据"} subTitle={"清除所有聊天、设置数据"}>
                <IconButton text={"立即清除"}/>
            </ListItem>
        </List>
    )
}