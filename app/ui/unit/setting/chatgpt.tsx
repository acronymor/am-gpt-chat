import React from "react";

import {List, ListItem} from "@/app/ui/lib/list";
import {InputNumber, InputRange, InputText} from "@/app/ui/lib/input";
import {Select} from "@/app/ui/lib/select";

export function ChatGpt(props: {
    config: any,
    enabled: boolean,
}) {
    let config = props.config;
    const temperature = config?.temperature
    const key: string = config?.openAIApiKey
    const topP: number = config?.topP
    const timeout: number = config?.timeout
    const modelName: string = config?.modelName
    const n: number = config?.n
    const baseUrl: string = config?.configuration?.baseURL
    const organization: string = config?.configuration?.organization

    return (
        <List>
            <ListItem title={"模型"}>
                <Select>
                    <option>{modelName}</option>
                </Select>
            </ListItem>

            <ListItem title={"秘钥(key)"} subTitle={"OpenAI 秘钥"}>
                <InputText onChange={() => {
                    console.log("ChatGpt Key")
                }} value={`${key}`}/>
            </ListItem>

            <ListItem title={"Base URL"} subTitle={"Base URL"}>
                <InputText onChange={() => {
                    console.log("Base URL")
                }} value={`${baseUrl}`}/>
            </ListItem>

            <ListItem title={"组织(organization)"} subTitle={"组织"}>
                <InputText onChange={() => {
                    console.log("Organization")
                }} value={`${organization}`}/>
            </ListItem>

            <ListItem title={"温度(temperature)"} subTitle={"值越大，回复越随机"}>
                <InputRange onChange={() => {
                    console.log("ChatGpt Temperature")
                }} value={`${temperature}`} min={0} max={1} step={0.1}/>
            </ListItem>

            <ListItem title={"超时时间(timeout)"} subTitle={"单次请求最大超时时间"}>
                <InputNumber onChange={() => {
                    console.log("Timeout")
                }} value={timeout} min={1 * 100} max={5 * 60 * 1000}/>
            </ListItem>
        </List>
    )
}