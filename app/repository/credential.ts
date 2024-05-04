import {Repository} from "typeorm";
import {ProviderImpl} from "@/app/entities/provider-impl";
import {getDataSource} from "@/app/db/datasource";
import {LlmConfig} from "@/app/entities/provider";

export class LlmCredentialRepository {
    id: number
    repository: Repository<ProviderImpl>

    constructor() {
        this.id = 1
    }

    async initialize() {
        this.repository = (await getDataSource()).getRepository(ProviderImpl)
        return this
    }

    public async get() {
        const res = await this.repository.findOneBy({user: {id: 1}})
        const config = res?.config ?? {} as LlmConfig
        return [config]
    }

    public async set(key: string, value: any) {
        let res = await this.repository.findOneBy({user: {id: 1}})
        let inputs = res?.config.inputs ?? []

        for (let item of inputs) {
            if (item.name == key) {
                item.value = value
            }
        }

        res!.config.inputs = inputs
        await this.repository.update(res?.id ?? 1, res ?? {})
    }
}

