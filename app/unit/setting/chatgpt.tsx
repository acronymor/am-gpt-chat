import React from "react";

import {OpenAiModel} from "@/app/proto/setting";
import {ChatGptConfig} from "@/app/proto/llm";
import {List, ListItem} from "@/app/ui/lib/list";
import {InputNumber, InputRange, InputText} from "@/app/ui/lib/input";
import {Select} from "@/app/ui/lib/select";
import {getChatGptSetting, setChatGptConfSetting, setChatGptSetting} from "@/app/unit/setting/lib/data";


export async function ChatGpt() {

    const config = await getChatGptSetting() as ChatGptConfig

    return (
        <List>
            <ListItem title={"模型"}>
                <Select uKey={"openAIApiKey"} uValue={config["openAIApiKey"]} update={setChatGptSetting}>
                    {
                        Object.values(OpenAiModel).map((v) => (
                            <option value={v} key={v}>
                                {v}
                            </option>
                        ))
                    }
                </Select>
            </ListItem>
            <ListItem title={"秘钥(key)"} subTitle={"OpenAI 秘钥"}>
                <InputText onChange={setChatGptSetting} uKey={"openAIApiKey"} uValue={config.openAIApiKey}/>
            </ListItem>

            <ListItem title={"Base URL"} subTitle={"Base URL"}>
                <InputText onChange={setChatGptConfSetting} uKey={"baseURL"}
                           uValue={config.configuration?.baseURL ?? ''}/>
            </ListItem>

            <ListItem title={"组织(organization)"} subTitle={"组织"}>
                <InputText onChange={setChatGptConfSetting} uKey={"organization"}
                           uValue={config.configuration?.organization ?? ''}/>
            </ListItem>

            <ListItem title={"温度(temperature)"} subTitle={"值越大，回复越随机"}>
                <InputRange onChange={setChatGptSetting} uKey={"temperature"} uValue={config.temperature} min={0}
                            max={1} step={0.1}/>
            </ListItem>

            <ListItem title={"超时时间(timeout)"} subTitle={"单次请求最大超时时间"}>
                <InputNumber onChange={setChatGptSetting} uKey={"timeout"} uValue={config.timeout} min={1 * 100}
                             max={5 * 60 * 1000}/>
            </ListItem>
        </List>
    )
}