import React, {useState} from "react";

import {List, ListItem} from "@/app/ui/lib/list";
import {InputNumber, InputRange, InputText} from "@/app/ui/lib/input";
import {useAppConfigStore} from "@/app/store/setting";
import {Select} from "@/app/ui/lib/select";

export function ChatGpt() {
    let store = useAppConfigStore()
    let [state, setState] = useState(store.getChatGpt())

    return (
        <List>
            {
                <ListItem title={"模型"}>
                    <Select>
                        <option>{state?.modelName}</option>
                    </Select>
                </ListItem>
            }

            <ListItem title={"秘钥(key)"} subTitle={"OpenAI 秘钥"}>
                {
                    <InputText onChange={(e) => {
                        let config = {
                            ...state,
                            openAIApiKey: e.currentTarget.value,
                        }
                        setState(config)
                        store.updateChatGpt(config)
                    }} value={state.openAIApiKey}/>
                }
            </ListItem>


            <ListItem title={"Base URL"} subTitle={"Base URL"}>
                <InputText onChange={() => {
                    console.log("Base URL")
                }} value={`${state?.configuration?.baseURL}`}/>
            </ListItem>

            <ListItem title={"组织(organization)"} subTitle={"组织"}>
                <InputText onChange={() => {
                    console.log("Organization")
                }} value={`${state?.configuration?.organization}`}/>
            </ListItem>

            <ListItem title={"温度(temperature)"} subTitle={"值越大，回复越随机"}>
                <InputRange onChange={() => {
                    console.log("ChatGpt Temperature")
                }} value={`${state.temperature}`} min={0} max={1} step={0.1}/>
            </ListItem>

            <ListItem title={"超时时间(timeout)"} subTitle={"单次请求最大超时时间"}>
                <InputNumber onChange={() => {
                    console.log("Timeout")
                }} value={state.timeout} min={1 * 100} max={5 * 60 * 1000}/>
            </ListItem>
        </List>
    )
}