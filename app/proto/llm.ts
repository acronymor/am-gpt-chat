export interface LlmUsage {
    used: number;
    total: number;
}

export interface LlmModel {
    name: string;
    available: boolean;
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