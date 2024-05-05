import {StoreKey} from "@/app/constant";
import {createPersistStore} from "@/app/store/store";
import {Config} from "@/app/entities/workflow";
import {useContext} from "react";
import {WorkflowContext} from "@/app/unit/canvas/context";


type Shape = {
    id: number,
    draft: Config
}

function createEmptyWorkflow(id: number): Shape {
    return {
        id: id,
        draft: {nodes: [], edges: [], viewport: {zoom: 1, x: 0, y: 0}}
    }
}

const DEFAULT_WORKFLOW_STATE = createEmptyWorkflow(-1);


export const createWorkflowStore = createPersistStore(
    DEFAULT_WORKFLOW_STATE,
    (set, get) => ({
        update: () => {
            get().markUpdate()
        },
    }),
    {
        name: StoreKey.Workflow
    }
)

export const useWorkflowStore = () => {
    return useContext(WorkflowContext)!
}