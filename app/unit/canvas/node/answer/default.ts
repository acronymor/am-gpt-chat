import {NodeDefault, NodeEnum} from "@/app/unit/canvas/node/base/types";
import {AnswerNodeType} from "@/app/unit/canvas/node/answer/types";
import {ALL_CHAT_AVAILABLE_BLOCKS, ALL_COMPLETION_AVAILABLE_BLOCKS} from "@/app/unit/canvas/hooks/constants";

const nodeDefault: NodeDefault<AnswerNodeType> = {
    defaultValue: {
        variables: [],
        answer: '',
    },
    getAvailablePrevNodes(isChatMode: boolean) {
        const nodes = isChatMode
            ? ALL_CHAT_AVAILABLE_BLOCKS
            : ALL_COMPLETION_AVAILABLE_BLOCKS.filter(type => type !== NodeEnum.End)
        return nodes
    },
    getAvailableNextNodes(isChatMode: boolean) {
        const nodes = isChatMode
            ? ALL_CHAT_AVAILABLE_BLOCKS
            : ALL_COMPLETION_AVAILABLE_BLOCKS
        return nodes
    },
    checkValid(payload: AnswerNodeType, t: any) {
        let errorMessages = ''
        const {answer} = payload
        if (!answer)
            errorMessages = t('workflow.errorMsg.fieldRequired', {field: t('workflow.nodes.answer.answer')})

        return {
            isValid: !errorMessages,
            errorMessage: errorMessages,
        }
    },
}

export default nodeDefault
