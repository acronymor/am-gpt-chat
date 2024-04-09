import React from "react";

import {IconButton} from "@/app/ui/lib/button";
import {List, ListItem} from "@/app/ui/lib/list";

export function Danger() {
    return (
        <List>
            <ListItem title={"重置所有设置"} subTitle={"重置所有设置项回默认值"}>
                <IconButton text={"立即重置"} type={"danger"}/>
            </ListItem>

            <ListItem title={"清除所有数据"} subTitle={"清除所有聊天、设置数据"}>
                <IconButton text={"立即清除"} type={"danger"}/>
            </ListItem>
        </List>
    )
}