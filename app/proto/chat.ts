import {MessageRole, ModelType} from "@/app/constant";
import {MaskConfig} from "@/app/proto/setting";


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

export interface LlmUsage {
    used: number;
    total: number;
}

export interface LlmModel {
    name: string;
    available: boolean;
}

export type ChatRequest = {
    messages: RequestMessage[];
    config: MaskConfig;
}