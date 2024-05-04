import {Repository} from "typeorm";
import {WorkflowImpl} from "@/app/entities/workflow-impl";
import {getDataSource} from "@/app/db/datasource";
import {Config} from "@/app/entities/workflow";
import {unstable_noStore as noStore} from 'next/cache';


export class WorkflowRepository {
    id: number
    repository: Repository<WorkflowImpl>

    constructor() {
        this.id = 1
    }

    async initialize() {
        this.repository = (await getDataSource()).getRepository(WorkflowImpl)
        return this
    }

    public async getAll() {
        noStore()

        const res = await this.repository.find({
            where: {user: {id: 1}},
            select: {name: true},
        })
        return res
    }

    public async getById(id: number) {
        noStore()

        const res = await this.repository.findOneBy({id: id})
        return res
    }

    public async updateConfigById(id: number, config: Config) {
        const res = await this.repository.findOneBy({id: id})
        const tmp = {
            ...res,
            config: config
        }

        console.log("---------------")
        console.log(tmp)

        await this.repository.update(id, tmp)
    }

    public async setById(id: number, value: any) {
        const res = await this.repository.findOneBy({id: id})
        return res
    }

    public async set(key: string, value: any) {
        let res = await this.repository.findOneBy({id: 1})
        const tmp = {
            ...res,
        }
        await this.repository.update(res?.id ?? 1, tmp)
    }

    public async delete(id: number) {
        await this.repository.delete({id: id})
    }
}