import {INodeParams, INodeProperties} from "@/app/provider/base/interface";

export class OpenAILLmCredential implements INodeProperties {
    label: string
    name: string
    description: string
    icon: string;
    version: number;
    tags: string[];
    placeholder: string;
    inputs: INodeParams[]

    constructor() {
        this.label = 'OpenAI API'
        this.name = 'OpenAIApi'
        this.description = "OpenAI credential"
        this.icon = "icon.svg"
        this.version = 0.1
        this.tags = ["llm"]
        this.placeholder = ""
        this.inputs = [
            {
                label: 'OpenAI Api Key',
                name: 'OpenAIApiKey',
                type: 'password',
                placeholder: "OpenAI API Key",
                required: true,
            },
            {
                label: 'OpenAI Base URL',
                name: 'OpenAIBaseURL',
                type: 'string',
                placeholder: "OpenAI Base URL",
                required: false,
            },
            {
                label: 'OpenAI Organize',
                name: 'OpenAIOrganize',
                type: 'string',
                placeholder: "OpenAI Organize",
                required: false
            }
        ]
    }
}