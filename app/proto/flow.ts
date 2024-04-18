import {Viewport} from "reactflow";

export type FlowResponse = {
    id: number,
    graph: {
        nodes: any[],
        edges: any[],
        viewport?: Viewport
    }
    create_time: number,
    update_time: number
}