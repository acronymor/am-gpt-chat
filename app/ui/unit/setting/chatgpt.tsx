import React, {useEffect, useState} from "react";

import {useDebouncedCallback} from 'use-debounce';

import {List, ListItem} from "@/app/ui/lib/list";
import {InputNumber, InputRange, InputText} from "@/app/ui/lib/input";
import {Select} from "@/app/ui/lib/select";
import {ChatGptConfig} from "@/app/proto/llm";

const DEFAULT_CONFIG: ChatGptConfig = {
    openAIApiKey: "",
    temperature: 0,
    topP: 1,
    timeout: 3000,
    modelName: "gpt-3.5-turbo",
    n: 1,
    streaming: false,
    configuration: {
        baseURL: "",
        organization: "acronymor"
    }
}


export function ChatGpt() {
    const [state, setState] = useState<ChatGptConfig>(DEFAULT_CONFIG)
    const [enabled, setEnabled] = useState<boolean>(true)

    useEffect(() => {
        fetch('/api/setting?type=chatgpt', {
            method: "GET",
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            cache: "no-cache"
        }).then((response) => response.json())
            .then((response) => {
                if (response.code == 200) {
                    let data = response.data
                    setState(data.config)
                    setEnabled(data.isEnabled)
                } else {
                    throw new Error("Error Setting")
                }
            }).catch((e) => {
            console.error(e)
        })
    }, []);

    const update = useDebouncedCallback((isEnabled: boolean, config: ChatGptConfig) => {
        fetch('/api/setting', {
            method: "POST",
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            cache: "no-cache",
            body: JSON.stringify({"chatgpt": {"isEnabled": isEnabled, "config": config}})
        }).then((response) => response.json())
            .then((response) => response.json())
            .then((response) => {
                if (response.code == 200) {
                    console.debug(response.message)
                } else {
                    throw new Error("Error Setting")
                }
            }).catch((e) => {
            console.error(e);
        });
    }, 500);

    return (
        <List>
            <ListItem title={"模型"}>
                <Select>
                    <option>{state.modelName}</option>
                </Select>
            </ListItem>
            <ListItem title={"秘钥(key)"} subTitle={"OpenAI 秘钥"}>
                <InputText onChange={(e) => {
                    const config = {...state, openAIApiKey: e.currentTarget.value};
                    setState(config);
                    update(enabled, config)
                }} value={state.openAIApiKey}/>
            </ListItem>


            <ListItem title={"Base URL"} subTitle={"Base URL"}>
                <InputText onChange={(e) => {
                    const config = {...state, configuration: {baseURL: e.currentTarget.value}};
                    setState(config);
                    update(enabled, config)
                }} value={`${state.configuration?.baseURL}`}/>
            </ListItem>

            <ListItem title={"组织(organization)"} subTitle={"组织"}>
                <InputText onChange={(e) => {
                    const config = {...state, configuration: {organization: e.currentTarget.value}};
                    setState(config);
                    update(enabled, config)
                }} value={`${state.configuration?.organization}`}/>
            </ListItem>

            <ListItem title={"温度(temperature)"} subTitle={"值越大，回复越随机"}>
                <InputRange onChange={(e) => {
                    const config = {...state, temperature: parseFloat(e.currentTarget.value)};
                    setState(config);
                    update(enabled, config)
                }} value={`${state.temperature}`} min={0} max={1} step={0.1}/>
            </ListItem>

            <ListItem title={"超时时间(timeout)"} subTitle={"单次请求最大超时时间"}>
                <InputNumber onChange={(e) => {
                    const config = {...state, temperature: parseInt(e.currentTarget.value)};
                    setState(config);
                    update(enabled, config)
                }} value={state.timeout} min={1 * 100} max={5 * 60 * 1000}/>
            </ListItem>
        </List>
    )
}