export const enum LlmType {
    CHATGPT = "chatgpt"
}

export type ChatGptConfig = {
    "openAIApiKey": string,
    "temperature": number,
    "topP": number,
    "timeout": number,
    "modelName": string,
    "n": number,
    "streaming": boolean,
    "configuration": {
        "baseURL": string,
        "organization": string
    }
}