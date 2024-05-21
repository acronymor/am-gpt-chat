import {StoreKey} from "@/app/constant";
import {createPersistStore} from "@/app/store/store";
import {Config} from "@/app/entities/workflow";


type Shape = {
    id: number,
    draft: Config
    modal: string,
}

function createEmptyWorkflow(id: number): Shape {
    return {
        id: id,
        draft: {nodes: [], edges: [], viewport: {zoom: 1, x: 0, y: 0}},
        modal: ''
    }
}

const DEFAULT_WORKFLOW_STATE = createEmptyWorkflow(-1);


export const useWorkflowStore = createPersistStore(
    DEFAULT_WORKFLOW_STATE,
    (set, get) => ({
        update: () => {
            get().markUpdate()
        },

        updateModal: (id: string) => {
            get().modal = id
            get().markUpdate()
        },

        getModal: () => {
            return get().modal
        }
    }),
    {
        name: StoreKey.Workflow
    }
)