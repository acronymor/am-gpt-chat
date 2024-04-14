import {Node} from "@/app/proto/node";
import {Edge} from "@/app/proto/edge";

export interface Graph {
    id: string;
    nodes: Node[];
    edges: Edge[];
    viewPort: ViewPort;
}

export interface ViewPort {
    x: number;
    y: number;
    zoom: number;
}