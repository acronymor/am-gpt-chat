import {StoreKey} from "@/app/constant";
import {createPersistStore} from "@/app/store/store";
import {Config} from "@/app/entities/workflow";


type Shape = {
    id: number,
    draft: Config
    modal: string,
}

type Workflow = {
    data: [Shape],
    current: number
}

function createEmptyWorkflow(id: number): Workflow {
    return {
        data: [{
            id: id,
            draft: {nodes: [], edges: [], viewport: {zoom: 1, x: 0, y: 0}},
            modal: ''
        }],
        current: id
    }
}

const DEFAULT_WORKFLOW_STATE = createEmptyWorkflow(0);


export const useWorkflowStore = createPersistStore(
    DEFAULT_WORKFLOW_STATE,
    (set, get) => ({
        update: () => {
            get().markUpdate()
        },

        getCurrent: () => {
            return get().current
        },

        getWorkflow: (flowId: number) => {
            const workflows = get().data.filter(t => t.id === flowId)
            if (workflows.length != 1) {
                console.error("ERROR workflow, ", workflows.length)
            }

            return workflows[0].draft
        },

        updateModal: (nodeId: string) => {
            const workflows = get().data.filter(t => t.id === get().current)
            if (workflows.length != 1) {
                console.error("ERROR workflow, ", workflows.length)
            }

            workflows[0].modal = nodeId
            get().markUpdate()
        },

        getModal: () => {
            const workflows = get().data.filter(t => t.id === get().current)
            if (workflows.length != 1) {
                console.error("ERROR workflow, ", workflows.length)
            }

            return workflows[0].modal
        }
    }),
    {
        name: StoreKey.Workflow
    }
)