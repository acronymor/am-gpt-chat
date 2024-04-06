'use server'

import {SettingHandler} from "@/app/db/handler";

export async function getGenericSetting() {
    let handler = new SettingHandler("admin")
    let res = JSON.parse(await handler.select())
    return res["generic"]
}

export async function setGenericSetting(key: string, value: any) {
    let handler = new SettingHandler("admin")
    let res = JSON.parse(await handler.select())
    let generic = res["generic"]
    generic[key] = value
    res["generic"] = generic

    await handler.update(res)
}

export async function getChatGptSetting() {
    let handler = new SettingHandler("admin")
    let res = JSON.parse(await handler.select())
    return res["chatgpt"]["config"]
}

export async function setChatGptSetting(key: string, value: any) {
    const handler = new SettingHandler("admin")
    let res = JSON.parse(await handler.select())
    res["chatgpt"]["config"][key] = value
    await handler.update(res)
}

export async function setChatGptConfSetting(key: string, value: any) {
    const handler = new SettingHandler("admin")
    let res = JSON.parse(await handler.select())
    res["chatgpt"]["config"]["configuration"][key] = value
    await handler.update(res)
}