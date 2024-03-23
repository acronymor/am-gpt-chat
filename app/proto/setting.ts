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
    hideContext?: boolean;
    syncGlobalConfig?: boolean;
    lang: string;
    builtin: boolean;
};

export type SettingRequest = {
    generic?: GenericConfig,
    chatgpt?: {
        isEnabled: boolean,
        config: ChatGptConfig
    },
}