import {Viewport} from "reactflow";
import {Edge, Node} from "@/app/unit/canvas/node/base/types";

export type Config = {
    nodes: Node[]
    edges: Edge[]
    viewport: Viewport
};

export interface IWorkflow {
    name: string
    config: Config
}