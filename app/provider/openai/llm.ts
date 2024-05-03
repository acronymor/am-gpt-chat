import {ChatOptions, LlmApi, LlmModel, LlmUsage} from "@/app/provider/base/llm";
import {RequestMessage} from "@/app/proto/chat";
import {ChatOpenAI} from "@langchain/openai";
import {PromptTemplate} from "@langchain/core/prompts";
import {BytesOutputParser} from "@langchain/core/output_parsers";
import {OpenAILLmCredential} from "@/app/provider/openai/config.credential";
import {OpenAILLm} from "@/app/provider/openai/config";

function formattedMessage(messages: RequestMessage[]): string {
    let builder: string[] = []
    for (const message of messages) {
        builder.push(`${message.role}: ${message.content}`)
    }
    return builder.join("\n");
}

const TEMPLATE = `
You are a pirate named Patchy. All responses must be extremely verbose and in pirate dialect.
 
Current conversation:
{chat_history}
 
User: {input}
AI:`;

export type ChatGptConfig = {
    openAIApiKey: string,
    temperature: number,
    topP: number,
    timeout: number,
    modelName: string,
    n: number,
    streaming: boolean,
    configuration?: {
        baseURL?: string,
        organization?: string
    }
}

export class OpenAIApi implements LlmApi {
    private readonly stub: ChatOpenAI;

    constructor(baseConfig: OpenAILLm, credConfig: OpenAILLmCredential) {
        // TODO merge both baseConfig and credConfig
        const cfg = {}
        this.stub = new ChatOpenAI(cfg);
    }

    async chat(body: ChatOptions): Promise<any> {
        const prompt = PromptTemplate.fromTemplate(TEMPLATE);
        const outputParser = new BytesOutputParser();
        const chain = prompt.pipe(this.stub).pipe(outputParser);
        const stream = await chain.stream({
            chat_history: formattedMessage(body.options.messages),
            input: formattedMessage([body.options.messages[body.options.messages.length - 1]]),
        });

        return stream
    }

    usage(): Promise<LlmUsage> {
        throw new Error("Method not implemented.");
    }

    models(): Promise<LlmModel[]> {
        throw new Error("Method not implemented.");
    }
}