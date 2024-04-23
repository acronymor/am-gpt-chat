import type {Edge as ReactFlowEdge, Node as ReactFlowNode} from "reactflow";

export type Node<T = {}> = ReactFlowNode<CommonNodeType<T>>
export type NodeProps<T = unknown> = { id: string; data: CommonNodeType<T> }
export type Edge = ReactFlowEdge<CommonEdgeType>

export type NodePanelProps<T> = {
    id: string
    data: CommonNodeType<T>
}

export type CommonNodeType<T = {}> = {
    _isInvalidConnection?: boolean
    _connectedSourceHandleIds?: string[]
    _connectedTargetHandleIds?: string[]
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

export enum NodeEnum {
    Start = 'start',
    End = 'end',
    Answer = 'answer',
    LLM = 'llm',
    IfElse = 'if-else',
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