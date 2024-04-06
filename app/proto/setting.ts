import {ChatGptConfig} from "@/app/proto/llm";

export enum Theme {
    Auto = "auto",
    Dark = "dark",
    Light = "light",
}

export enum SubmitKey {
    Enter = "Enter",
    CtrlEnter = "Ctrl + Enter",
    ShiftEnter = "Shift + Enter",
    AltEnter = "Alt + Enter",
    MetaEnter = "Meta + Enter",
}

export enum OpenAiModel {
    GPT35= "gpt-3.5-turbo"
}

export type  GenericConfig = {
    theme: Theme
    submitKey: SubmitKey
}

export type AppConfig = {
    theme: Theme,
    submitKey: SubmitKey,
}

export type SettingRequest = {
    generic?: GenericConfig,
    chatgpt?: {
        isEnabled: boolean,
        config: ChatGptConfig
    },
}