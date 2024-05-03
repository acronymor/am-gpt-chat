import {ChatRequest} from "@/app/proto/chat";

export interface LlmUsage {
    used: number;
    total: number;
}

export interface LlmModel {
    name: string;
    available: boolean;
}

export interface ChatOptions {
    options: ChatRequest;

    onUpdate?: (message: string, chunk: string) => void;
    onFinish: (message: string) => void;
    onError?: (err: Error) => void;
    onController?: (controller: AbortController) => void;
}

export abstract class LlmApi {
    abstract chat(msg: ChatOptions): Promise<any>;

    abstract usage(): Promise<LlmUsage>;

    abstract models(): Promise<LlmModel[]>;
}