import {ChatGptConfig, MaskConfig} from "@/app/proto/setting";

export const ROLES = ["system", "user", "assistant"] as const;
export type MessageRole = (typeof ROLES)[number];
export type ModelType = (typeof DEFAULT_LLM_MODELS)[number]["name"];

export enum StoreKey {
    Config = "app-setting",
    CHAT = "app-chat",
    Mask = "app-mask",
}

export const createEmptyChatGpt = () => ({
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
}) as ChatGptConfig

export const createEmptyMask = (id: string, date: number) => ({
    id: id,
    avatar: "gpt-bot",
    context: [],
    lang: "en",
    builtin: false,
    createdAt: date,
}) as MaskConfig

export const DEFAULT_LLM_MODELS = [
    {
        name: "gpt-3.5-turbo",
        available: true,
    },
    {
        name: "gpt-4",
        available: true,
    }
]