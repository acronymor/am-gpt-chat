export interface Node {
    id: string;
    width: number;
    height: number;
    type: string;
    data: Data;
    selected: boolean;
    dragging: boolean;
    position: Position;
    positionAbsolute: Position;
}

export interface Position {
    x: number;
    y: number;
}

export interface Data {
    id: number;
    label: string;
    name: string;
    description: string;
    version: number;
    inputAnchors: InputParam[];
    inputParams: InputParam[];
    outputAnchors: OutputParam[];
    outputParams: OutputParam[];
}

export interface InputParam {
    label: string;
    name: string;
    type: string;
    id: string;
}


export interface OutputParam {
    label: string;
    name: string;
    type: string;
    fileType: string;
    id: string;
}