import {NextRequest} from "next/server";
import {ChatRequest} from "@/app/proto/chat";
import {SettingHandler} from "@/app/api/util/handler";
import {SettingRequest} from "@/app/proto/setting";
import {ChatGptConfig} from "@/app/proto/llm";
import {ChatGptApi} from "@/app/api/chat/chatgpt";
import {ChatOptions} from "@/app/api/chat/llm";
import {StreamingTextResponse} from 'ai'

async function handle(req: NextRequest) {
    let body = await req.json() as ChatRequest
    console.log(body)

    const settingHandler = new SettingHandler("admin")
    const config = JSON.parse(await settingHandler.select()) as SettingRequest
    if (config.chatgpt?.isEnabled) {
        const gptConfig = config.chatgpt.config as ChatGptConfig
        const stub = new ChatGptApi(gptConfig);
        const options: ChatOptions = {
            options: body,
            onController(controller: AbortController): void {
                console.log(controller)
            },
            onError(err: Error): void {
                console.log(err)
            },
            onFinish(message: string): void {
                console.log(message)
            },
            onUpdate(message: string, chunk: string): void {
                console.log(message)
            },

        }
        return new StreamingTextResponse(await stub.chat(options))
    }
}

export const POST = handle;