import {NodeDefault} from "@/app/unit/canvas/node/base/types";
import {StartNodeType} from "@/app/unit/canvas/node/start/types";
import {ALL_CHAT_AVAILABLE_BLOCKS, ALL_COMPLETION_AVAILABLE_BLOCKS} from "@/app/unit/canvas/hooks/constants";

const nodeDefault: NodeDefault<StartNodeType> = {
    defaultValue: {
        variables: [],
    },
    getAvailablePrevNodes() {
        return []
    },
    getAvailableNextNodes(isChatMode: boolean) {
        const nodes = isChatMode ? ALL_CHAT_AVAILABLE_BLOCKS : ALL_COMPLETION_AVAILABLE_BLOCKS
        return nodes
    },
    checkValid() {
        return {
            isValid: true,
        }
    },
}

export default nodeDefault