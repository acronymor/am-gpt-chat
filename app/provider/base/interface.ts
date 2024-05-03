export type NodeParamsType =
    | 'string'
    | 'number'
    | 'boolean'
    | 'password'
    | 'json'
    | 'code'
    | 'date'

export interface INodeParams {
    label: string
    name: string
    type: NodeParamsType
    value?: any
    required: boolean
    placeholder?: string
}

export interface INodeProperties {
    label: string
    name: string
    icon: string
    version: number
    tags?: string[]
    description?: string
    placeholder?: string
    inputs: INodeParams[]
}