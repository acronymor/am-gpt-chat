import {ChatRequest, LlmModel, LlmUsage} from "@/app/proto/chat";


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