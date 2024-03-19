import React, {useEffect, useState} from "react";
import {useDebouncedCallback} from "use-debounce";

import {GenericConfig, SubmitKey, Theme} from "@/app/proto/setting";
import {getSetting, setSetting} from "@/app/ui/util/fetch_util";
import {useAppConfigStore} from "@/app/store/setting";

import {List, ListItem} from "@/app/ui/lib/list";
import {IconButton} from "@/app/ui/lib/button";
import {Select} from "@/app/ui/lib/select";

const DEFAULT_CONFIG: GenericConfig = {
    theme: Theme.Auto,
    submitKey: SubmitKey.Enter
}


export function General() {
    const [state, setState] = useState<GenericConfig>(DEFAULT_CONFIG)
    const store = useAppConfigStore()

    useEffect(() => {
        getSetting("generic", (response) => {
            let data = response?.data
            setState(data.config)
        })

    }, []);

    const update = useDebouncedCallback((config: GenericConfig) => {
        const body = {"generic": {"config": config}}
        setSetting(body, (response) => {
            console.log(response.data)
        })
    }, 500);

    return (
        <List>
            <ListItem title={"头像"}>
                <IconButton text={"ICON"}/>
            </ListItem>

            <ListItem title={"当前版本: v1.0.0"} subTitle={"发现新版本: v1.0.1"}>
                <IconButton text={"前往更新"}/>
            </ListItem>

            <ListItem title={"发送键"}>
                <Select value={state.submitKey} onChange={(e) => {
                    const config = {...state, submitKey: e.currentTarget.value as SubmitKey};
                    store.update((cfg) => cfg.submitKey = config.submitKey)
                    setState(config);
                    update(config)
                }}>
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
                <Select value={state.theme} onChange={(e) => {
                    const config = {...state, theme: e.currentTarget.value as Theme};
                    document.body.className = config.theme;
                    store.update((cfg) => cfg.theme = config.theme)
                    setState(config);
                    update(config)
                }}>
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