import {MessageRole, ModelType} from "@/app/constant";
import {MaskConfig} from "@/app/proto/mask";


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

export type ChatRequest = {
    messages: RequestMessage[];
    config: MaskConfig;
}