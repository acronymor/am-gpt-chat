import {ChatGptConfig} from "@/app/proto/llm";

export type MaskContext = {
    id: string,
    role: string,
    content: string
}

export type MaskConfig = {
    id: string,
    avatar: string,
    name: string,
    context: [MaskContext],
    config: ChatGptConfig,
    created_time: number,
    update_time: number,
};