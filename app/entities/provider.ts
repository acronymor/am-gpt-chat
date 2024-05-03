import {INodeProperties} from "@/app/provider/base/interface";

export enum ModelType {
    LLM = "llm",
    TEXT_EMBEDDING = "text-embedding",
    SPEECH2TEXT = "speech2text",
    TEXT2IMG = "text2img",
}

export type LlmConfig = INodeProperties

export interface IProvider {
    providerName: string
    modelName: string
    modelType: ModelType
    config: LlmConfig
}