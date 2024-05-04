import {WorkflowRepository} from "@/app/repository/workflow";

const useWorkflow = () => {
    const getAllMask = async () => {
        'use server'

        const handler = await new WorkflowRepository().initialize()
        return handler.getAll()
    }

    const deleteMaskById = async (id: number) => {
        'use server'

        const handler = await new WorkflowRepository().initialize()
        return handler.delete(id)
    }

    return {
        getAllMask,
        deleteMaskById
    }
}

export default useWorkflow