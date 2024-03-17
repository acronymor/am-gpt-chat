export const enum LlmType {
    CHATGPT = "chatgpt"
}

export type LLmConfig = {
    model: LlmType,
    isEnabled: boolean,
    config: object
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


export type AppConfig = {
    llm: LLmConfig[]
}