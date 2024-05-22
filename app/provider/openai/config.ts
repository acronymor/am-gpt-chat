import {INodeParams, INodeProperties} from "@/app/provider/base/interface";

export class OpenAILLm implements INodeProperties {
    label: string;
    name: string;
    type: string;
    icon: string;
    version: number;
    tags: string[]
    description: string
    inputs: INodeParams[]

    constructor() {
        this.label = 'OpenAI'
        this.name = 'openAI'
        this.type = 'OpenAI'
        this.icon = 'icon.svg'
        this.version = 4.0
        this.description = 'Wrapper around OpenAI large language models'
        this.inputs = [
            {
                label: 'OpenAI Temperature',
                name: 'OpenAITemperature',
                type: 'number',
                option: {min: 0, max: 1},
                placeholder: 1,
                required: false
            },
            {
                label: 'OpenAI Streaming',
                name: 'OpenAIStreaming',
                type: 'boolean',
                placeholder: "OpenAI Streaming",
                required: false
            },
            {
                label: 'OpenAI TopP',
                name: 'OpenAI TopP',
                type: 'number',
                option: {min: 0, max: 1},
                placeholder: 0.5,
                required: false
            },
        ]
    }
}