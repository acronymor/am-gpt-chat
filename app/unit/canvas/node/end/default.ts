import {NodeDefault, NodeEnum} from "@/app/unit/canvas/node/base/types";
import {EndNodeType} from "@/app/unit/canvas/node/end/types";
import {ALL_CHAT_AVAILABLE_BLOCKS, ALL_COMPLETION_AVAILABLE_BLOCKS} from "@/app/unit/canvas/hooks/constants";

const nodeDefault: NodeDefault<EndNodeType> = {
    defaultValue: {
        outputs: [],
    },
    getAvailablePrevNodes(isChatMode: boolean) {
        const nodes = isChatMode
            ? ALL_CHAT_AVAILABLE_BLOCKS
            : ALL_COMPLETION_AVAILABLE_BLOCKS.filter(type => type !== NodeEnum.End)
        return nodes
    },
    getAvailableNextNodes() {
        return []
    },
    checkValid(payload: EndNodeType) {
        let isValid = true
        let errorMessages = ''
        if (payload.type) {
            isValid = true
            errorMessages = ''
        }
        return {
            isValid,
            errorMessage: errorMessages,
        }
    },
}

export default nodeDefault