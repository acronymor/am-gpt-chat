import React from "react";

import {List, ListItem} from "@/app/api/lib/list";
import {InputNumber, InputRange} from "@/app/api/lib/input";

export function ChatGpt() {
    return (
        <List>
            <ListItem title={"温度(temperature)"} subTitle={"值越大，回复越随机"}>
                <InputRange onChange={() => {
                    console.log("ChatGpt Temperature")
                }} value={"1"} min={"0"} max={"1"} step={"0.1"}/>
            </ListItem>

            <ListItem title={"单词回复限制(max tokens)"} subTitle={"单次交互所用的最大 Token 数"}>
                <InputNumber onChange={() => {
                    console.log("ChatGpt Token")
                }} value={4000} min={1024} max={51200}/>
            </ListItem>
        </List>
    )
}