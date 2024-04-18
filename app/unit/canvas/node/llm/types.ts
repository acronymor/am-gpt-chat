import {CommonNodeType, ValueSelector, Variable} from "@/app/unit/canvas/node/base/types";

export type ModelConfig = {
    provider: string
    name: string
    mode: string
    completion_params: Record<string, any>
}

export enum PromptRole {
    system = 'system',
    user = 'user',
    assistant = 'assistant',
}

export type PromptItem = {
    role?: PromptRole
    text: string
}

export type RolePrefix = {
    user: string
    assistant: string
}

export type Memory = {
    role_prefix?: RolePrefix
    window: {
        enabled: boolean
        size: number | string | null
    }
}

export enum Resolution {
    low = 'low',
    high = 'high',
}

export type LLMNodeType = CommonNodeType & {
    model: ModelConfig
    variables: Variable[]
    prompt_template: PromptItem[] | PromptItem
    memory?: Memory
    context: {
        enabled: boolean
        variable_selector: ValueSelector
    }
    vision: {
        enabled: boolean
        configs?: {
            detail: Resolution
        }
    }
}