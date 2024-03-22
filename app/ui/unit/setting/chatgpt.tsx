import React, {useEffect, useState} from "react";

import {useDebouncedCallback} from 'use-debounce';

import {ChatGptConfig} from "@/app/proto/setting";
import {List, ListItem} from "@/app/ui/lib/list";
import {InputNumber, InputRange, InputText} from "@/app/ui/lib/input";
import {Select} from "@/app/ui/lib/select";
import {getSetting, setSetting} from "@/app/ui/util/fetch_util";
import {createEmptyChatGpt} from "@/app/constant";


export function ChatGpt() {
    const [state, setState] = useState<ChatGptConfig>(createEmptyChatGpt())
    const [enabled, setEnabled] = useState<boolean>(true)

    useEffect(() => {
        getSetting("chatgpt", (response) => {
            let data = response?.data
            setState(data.config)
            setEnabled(data.isEnabled)
        })

    }, []);

    const update = useDebouncedCallback((isEnabled: boolean, config: ChatGptConfig) => {
        const body = {"chatgpt": {"isEnabled": isEnabled, "config": config}}
        setSetting(body, (response) => {
            console.log(response.data)
        })
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