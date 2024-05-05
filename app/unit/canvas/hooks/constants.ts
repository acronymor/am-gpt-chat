import {NodeEnum} from "@/app/unit/canvas/node/base/types";
import StartNodeDefault from '@/app/unit/canvas/node/start/default'
import EndNodeDefault from '@/app/unit/canvas/node/end/default'
import LLMNodeDefault from '@/app/unit/canvas/node/llm/default'
import AnswerNodeDefault from '@/app/unit/canvas/node/answer/default'
import IfElseNodeDefault from '@/app/unit/canvas/node/if-else/default'
import QuestionNodeDefault from '@/app/unit/canvas/node/question-classifier/default'
import VariableAssignerDefault from '@/app/unit/canvas/node/variable-assigner/default'


export const NODE_WIDTH = 240
export const X_OFFSET = 60
export const NODE_WIDTH_X_OFFSET = NODE_WIDTH + X_OFFSET
export const Y_OFFSET = 39

export const START_INITIAL_POSITION = { x: 80, y: 282 }

export const NODES_INITIAL_DATA = {
    [NodeEnum.Start]: {
        type: NodeEnum.Start,
        title: 'Start',
        desc: '',
    },
    [NodeEnum.End]: {
        type: NodeEnum.End,
        title: '',
        desc: '',
    },
    [NodeEnum.LLM]: {
        type: NodeEnum.LLM,
        title: '',
        desc: '',
        variables: [],
    },
    [NodeEnum.Answer]: {
        type: NodeEnum.Answer,
        title: '',
        desc: '',
    },
    [NodeEnum.IfElse]: {
        type: NodeEnum.IfElse,
        title: '',
        desc: '',
    },
    [NodeEnum.QuestionClassifier]: {
        type: NodeEnum.QuestionClassifier,
        title: '',
        desc: '',
        query_variable_selector: [],
        topics: [],
    },
    [NodeEnum.VariableAssigner]: {
        type: NodeEnum.VariableAssigner,
        title: '',
        desc: '',
        query_variable_selector: [],
        topics: [],
    }
}

type NodesExtraData = {
    author: string
    about: string
    availablePrevNodes: NodeEnum[]
    availableNextNodes: NodeEnum[]
    getAvailablePrevNodes: (isChatMode: boolean) => NodeEnum[]
    getAvailableNextNodes: (isChatMode: boolean) => NodeEnum[]
    checkValid: any
}
export const NODES_EXTRA_DATA: Record<NodeEnum, NodesExtraData> = {
    [NodeEnum.Start]: {
        author: '',
        about: '',
        availablePrevNodes: [],
        availableNextNodes: [],
        getAvailablePrevNodes: StartNodeDefault.getAvailablePrevNodes,
        getAvailableNextNodes: StartNodeDefault.getAvailableNextNodes,
        checkValid: StartNodeDefault.checkValid,
    },
    [NodeEnum.End]: {
        author: '',
        about: '',
        availablePrevNodes: [],
        availableNextNodes: [],
        getAvailablePrevNodes: EndNodeDefault.getAvailablePrevNodes,
        getAvailableNextNodes: EndNodeDefault.getAvailableNextNodes,
        checkValid: EndNodeDefault.checkValid,
    },
    [NodeEnum.LLM]: {
        author: '',
        about: '',
        availablePrevNodes: [],
        availableNextNodes: [],
        getAvailablePrevNodes: LLMNodeDefault.getAvailablePrevNodes,
        getAvailableNextNodes: LLMNodeDefault.getAvailableNextNodes,
        checkValid: LLMNodeDefault.checkValid,
    },
    [NodeEnum.Answer]: {
        author: '',
        about: '',
        availablePrevNodes: [],
        availableNextNodes: [],
        getAvailablePrevNodes: AnswerNodeDefault.getAvailablePrevNodes,
        getAvailableNextNodes: AnswerNodeDefault.getAvailableNextNodes,
        checkValid: AnswerNodeDefault.checkValid,
    },
    [NodeEnum.IfElse]: {
        author: '',
        about: '',
        availablePrevNodes: [],
        availableNextNodes: [],
        getAvailablePrevNodes: IfElseNodeDefault.getAvailablePrevNodes,
        getAvailableNextNodes: IfElseNodeDefault.getAvailableNextNodes,
        checkValid: IfElseNodeDefault.checkValid,
    },
    [NodeEnum.QuestionClassifier]: {
        author: '',
        about: '',
        availablePrevNodes: [],
        availableNextNodes: [],
        getAvailablePrevNodes: QuestionNodeDefault.getAvailablePrevNodes,
        getAvailableNextNodes: StartNodeDefault.getAvailableNextNodes,
        checkValid: StartNodeDefault.checkValid,
    },
    [NodeEnum.VariableAssigner]: {
        author: '',
        about: '',
        availablePrevNodes: [],
        availableNextNodes: [],
        getAvailablePrevNodes: VariableAssignerDefault.getAvailablePrevNodes,
        getAvailableNextNodes: StartNodeDefault.getAvailableNextNodes,
        checkValid: StartNodeDefault.checkValid,
    }
}


export const ALL_CHAT_AVAILABLE_BLOCKS = Object.keys(NODES_EXTRA_DATA).filter(key => key !== NodeEnum.End && key !== NodeEnum.Start) as NodeEnum[]
export const ALL_COMPLETION_AVAILABLE_BLOCKS = Object.keys(NODES_EXTRA_DATA).filter(key => key !== NodeEnum.Answer && key !== NodeEnum.Start) as NodeEnum[]
