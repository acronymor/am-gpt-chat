export type Context = {
    id: string
    role: string
    content: string
}

export type Config = {
    id: number
    name: string
    content: string
};

export interface IWorkflow {
    name: string
    context: Context
    config: Config
}