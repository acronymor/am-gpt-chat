import {BaseMessage} from "@langchain/core/messages";

export interface LlmUsage {
    used: number;
    total: number;
}

export interface LlmModel {
    name: string;
    available: boolean;
}

export abstract class LlmGpt {
    abstract chat(msg: BaseMessage[]): Promise<string>;

    abstract usage(): Promise<LlmUsage>;

    abstract models(): Promise<LlmModel[]>;
}