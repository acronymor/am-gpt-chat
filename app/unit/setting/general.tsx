import React from "react";

import {List, ListItem} from "@/app/ui/lib/list";
import {IconButton} from "@/app/ui/lib/button";
import {Select} from "@/app/ui/lib/select";
import {SubmitKey, Theme} from "@/app/proto/setting";
import {getGenericSetting, setGenericSetting} from "@/app/unit/setting/lib/data";

export async function General() {
    const config = await getGenericSetting()

    return (
        <List>
            <ListItem title={"头像"}>
                <IconButton text={"ICON"}/>
            </ListItem>

            <ListItem title={"当前版本: v1.0.0"} subTitle={"发现新版本: v1.0.1"}>
                <IconButton text={"前往更新"}/>
            </ListItem>

            <ListItem title={"发送键"}>
                <Select uKey={"submitKey"} uValue={config["submitKey"]} update={setGenericSetting}>
                    {
                        Object.values(SubmitKey).map((v) => (
                            <option value={v} key={v}>
                                {v}
                            </option>
                        ))
                    }
                </Select>
            </ListItem>

            <ListItem title={"主题"}>
                <Select uKey={"theme"} uValue={config["theme"]} update={setGenericSetting}>
                    {
                        Object.values(Theme).map((v) => (
                            <option value={v} key={v}>
                                {v}
                            </option>
                        ))
                    }
                </Select>
            </ListItem>
        </List>
    )
}