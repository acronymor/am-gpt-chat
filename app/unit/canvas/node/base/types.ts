import type {Edge as ReactFlowEdge, Node as ReactFlowNode, NodeProps as ReactFlowNodeProps} from "reactflow";

export type CommonNodeType<T = {}> = {
    _isInvalidConnection?: boolean
    _connectedSourceHandleIds?: string[]
    _connectedTargetHandleIds?: string[]
    _targetBranches?: Branch[]
    selected?: boolean,
    title: string,
    desc: string,
    type: NodeEnum
} & T

export type CommonEdgeType = {
    _hovering?: boolean
    _connectedNodeIsHovering?: boolean
    _connectedNodeIsSelected?: boolean
    _runned?: boolean
    sourceType: NodeEnum
    targetType: NodeEnum
}


export type Node<T = {}> = ReactFlowNode<CommonNodeType<T>>
export type NodeProps<T = unknown> = { id: string; data: CommonNodeType<T> }
export type Edge = ReactFlowEdge<CommonEdgeType>
export type NodePanelProps<T> = { id: string; data: CommonNodeType<T> }

export type Branch = {
    id: string
    name: string
}

export enum NodeEnum {
    Start = 'start',
    End = 'end',
    Answer = 'answer',
    LLM = 'llm',
    IfElse = 'if-else',
    QuestionClassifier = 'question-classifier',
    VariableAssigner = 'variable-assigner',
}

export enum PanelEnum {
    Start = 'start',
    End = 'end',
    Answer = 'answer',
    LLM = 'llm',
    IfElse = 'if-else',
}

export type ValueSelector = string[] // [nodeId, key | obj key path]

export type Variable = {
    variable: string
    label?: string | {
        nodeType: NodeEnum,
        nodeName: string
        variable: string
    }
    // value_selector: ValueSelector
    // variable_type?: VarKindType
    value?: string
    options?: string[]
    required?: boolean
    isParagraph?: boolean
}

export enum InputVarType {
    textInput = 'text-input',
    paragraph = 'paragraph',
    select = 'select',
    number = 'number',
    url = 'url',
    files = 'files',
    json = 'json',
    contexts = 'contexts',
}

export type InputVar = {
    type: InputVarType
    label: string | {
        nodeType: NodeEnum
        nodeName: string
        variable: string
    }
    variable: string
    max_length?: number
    default?: string
    required: boolean
    hint?: string
    options?: string[]
}

export type OnNodeAdd = (
    newNodePayload: {
        nodeType: NodeEnum
        sourceHandle?: string
        targetHandle?: string
        toolDefaultValue?: ToolDefaultValue
    },
    oldNodesPayload: {
        prevNodeId?: string
        prevNodeSourceHandle?: string
        nextNodeId?: string
        nextNodeTargetHandle?: string
    }
) => void

export type ToolDefaultValue = {
    provider_id: string
    provider_type: string
    provider_name: string
    tool_name: string
    tool_label: string
    title: string
}

export type NodeDefault<T> = {
    defaultValue: Partial<T>
    getAvailablePrevNodes: (isChatMode: boolean) => NodeEnum[]
    getAvailableNextNodes: (isChatMode: boolean) => NodeEnum[]
    checkValid: (payload: T, t: any, moreDataForCheckValid?: any) => { isValid: boolean; errorMessage?: string }
}

export enum VarType {
    string = 'string',
    number = 'number',
    boolean = 'boolean',
    object = 'object',
    array = 'array',
    arrayString = 'array[string]',
    arrayNumber = 'array[number]',
    arrayObject = 'array[object]',
    arrayFile = 'array[file]',
}

export type OnSelectBlock = (type: NodeEnum, toolDefaultValue?: ToolDefaultValue) => void