import {Repository} from "typeorm";
import {getDataSource} from "@/app/db/datasource";
import {WorkflowImpl} from "@/app/entities/workflow-impl";

class WorkflowHandler {
    id: number
    repository: Repository<WorkflowImpl>


    constructor() {
        this.id = 1
    }

    async initialize() {
        this.repository = (await getDataSource()).getRepository(WorkflowImpl)
        return this
    }

    public async get() {
        const res = await this.repository.find()
        return res
    }

    public async set(key: string, value: any) {
        let res = await this.repository.findOneBy({id: 1})
        const tmp = {
            ...res,
            context: {...res?.context, [key]: value}
        }
        await this.repository.update(res?.id ?? 1, tmp)
    }

    public async delete(id: number) {
        await this.repository.delete({id: id})
    }
}

const useWorkflow = () => {
    const getAllMask = async () => {
        'use server'

        const handler = await new WorkflowHandler().initialize()
        return handler.get()
    }

    const deleteMaskById = async (id: number) => {
        'use server'

        const handler = await new WorkflowHandler().initialize()
        return handler.delete(id)
    }

    return {
        getAllMask,
        deleteMaskById
    }
}

export default useWorkflow