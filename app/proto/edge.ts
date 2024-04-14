export interface Edge {
    source: string;
    sourceHandle: string;
    target: string;
    targetHandle: string;
    types: string;
    id: string;
    animated: boolean;
    data: Data;
}

export interface Data {
    id: number;
    label: string;
    name: string;
}