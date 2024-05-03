import {getDataSource} from "@/app/db/datasource";
import {DataSource} from "typeorm";
import {SettingImpl} from "@/app/entities/setting-impl";
import {Config, SubmitKey, Theme} from "@/app/entities/setting";
import {UserImpl} from "@/app/entities/user-impl";

describe("#typeorm", () => {
    it("save setting", async () => {
        const db: DataSource = await getDataSource()
        const repository = db.getRepository(SettingImpl)

        const user = new UserImpl()
        user.id = 2
        user.name = "li"

        const setting = new SettingImpl()
        setting.user = user
        setting.config = {theme: Theme.Auto, submitKey: SubmitKey.Enter} as Config
        // await repository.save(setting)

        const res1 = await repository.findOneBy({id: 1})
        console.log(res1)

        const res2 = await repository.findOneBy({user: {id: 1, name: "li"}})
        console.log(res2)
    })
})