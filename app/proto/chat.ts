import {MessageRole} from "@/app/constant";


export interface RequestMessage {
    role: MessageRole;
    content: string;
}

export type ChatMessage = RequestMessage & {
    date: string;
    streaming?: boolean;
    isError?: boolean;
    id: string;
};

export type ChatRequest = {
    messages: RequestMessage[];
}