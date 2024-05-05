import {Memory, ModelConfig, PromptItem, Resolution} from "@/app/unit/canvas/node/llm/types";
import {CommonNodeType, ValueSelector, Variable} from "@/app/unit/canvas/node/base/types";

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
