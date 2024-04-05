import {ChatOptions, LlmApi} from "@/app/api/chat/llm";
import {RequestMessage} from "@/app/proto/chat";
import {ChatOpenAI} from "@langchain/openai";
import {LlmModel, LlmUsage, ChatGptConfig} from "@/app/proto/llm";
import {PromptTemplate} from "@langchain/core/prompts";
import {BytesOutputParser} from "@langchain/core/output_parsers";

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

export class ChatGptApi implements LlmApi {
    private readonly stub: ChatOpenAI;

    constructor(cfg: ChatGptConfig) {
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