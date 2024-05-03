import {Repository} from "typeorm";
import {getDataSource} from "@/app/db/datasource";
import {SettingImpl} from "@/app/entities/setting-impl";
import {SubmitKey, Theme} from "@/app/entities/setting";
import {ProviderImpl} from "@/app/entities/provider-impl";
import {LlmConfig} from "@/app/entities/provider";

class SettingHandler {
    id: number
    repository: Repository<SettingImpl>


    constructor() {
        this.id = 1
    }

    async initialize() {
        this.repository = (await getDataSource()).getRepository(SettingImpl)
        return this
    }

    public async get() {
        const res = await this.repository.findOneBy({user: {id: 1}})
        return res?.config ?? {submitKey: SubmitKey.CtrlEnter, theme: Theme.Auto}
    }

    public async set(key: string, value: any) {
        let res = await this.repository.findOneBy({user: {id: 1}})
        const tmp = {
            ...res,
            config: {...res?.config, [key]: value}
        }
        await this.repository.update(res?.id ?? 1, tmp)
    }
}

class LlmCredentialHandler {
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

const useSetting = () => {
    const getSetting = async () => {
        'use server'

        const handler = await new SettingHandler().initialize()
        return handler.get()
    }

    const setSetting = async (key: string, value: any) => {
        'use server'

        const handler = await new SettingHandler().initialize()
        return handler.set(key, value)
    }

    const getLlmCredential = async () => {
        'use server'

        const handler = await new LlmCredentialHandler().initialize()
        return handler.get()
    }

    const setLlmCredential = async (key: string, value: any) => {
        'use server'

        const handler = await new LlmCredentialHandler().initialize()
        return handler.set(key, value)
    }

    return {
        getSetting,
        setSetting,
        getLlmCredential,
        setLlmCredential,
    }
}

export default useSetting