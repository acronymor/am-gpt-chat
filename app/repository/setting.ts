import {Repository} from "typeorm";
import {SettingImpl} from "@/app/entities/setting-impl";
import {getDataSource} from "@/app/db/datasource";
import {SubmitKey, Theme} from "@/app/config/constant";

export class SettingRepository {
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