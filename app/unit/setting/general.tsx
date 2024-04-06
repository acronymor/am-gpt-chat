import React from "react";

import {List, ListItem} from "@/app/ui/lib/list";
import {IconButton} from "@/app/ui/lib/button";
import {Select} from "@/app/ui/lib/select";
import {SubmitKey, Theme} from "@/app/proto/setting";
import {getGenericSetting, setGenericSetting} from "@/app/unit/setting/lib/data";
import {revalidatePath} from "next/cache";

export async function General() {
    const config = await getGenericSetting()

    const update = async (key: string, value: any) => {
        'use server'

        await setGenericSetting(key, value)
        revalidatePath('/unit/setting');
    }

    return (
        <List>
            <ListItem title={"头像"}>
                <IconButton text={"ICON"}/>
            </ListItem>

            <ListItem title={"当前版本: v1.0.0"} subTitle={"发现新版本: v1.0.1"}>
                <IconButton text={"前往更新"}/>
            </ListItem>

            <ListItem title={"发送键"}>
                <Select uKey={"submitKey"} uValue={config["submitKey"]} update={update}>
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
                <Select uKey={"theme"} uValue={config["theme"]} update={update}>
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