import {MessageRole, ModelType} from "@/app/constant";

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


export type  GenericConfig = {
    theme: Theme
    submitKey: SubmitKey
}

export type AppConfig = {
    theme: Theme,
    submitKey: SubmitKey,
}

export enum LlmType {
    CHATGPT = "chatgpt"
}

export interface RequestMessage {
    role: MessageRole;
    content: string;
}

export type ChatMessage = RequestMessage & {
    date: string;
    streaming?: boolean;
    isError?: boolean;
    id: string;
    model?: ModelType;
};

export type ChatGptConfig = {
    openAIApiKey: string,
    temperature: number,
    topP: number,
    timeout: number,
    modelName: string,
    n: number,
    streaming: boolean,
    configuration?: {
        baseURL?: string,
        organization?: string
    }
}

export type MaskConfig = {
    id: string;
    createdAt: number;
    avatar: string;
    name: string;
    hideContext?: boolean;
    context: ChatMessage[];
    syncGlobalConfig?: boolean;
    modelConfig: ChatGptConfig;
    lang: string;
    builtin: boolean;
};