import {selectSettingByUserIdSql, selectUserIdByNameSql, updateSettingSql} from "@/app/api/util/sql";
import {exec, selectOne} from "@/app/api/util/sqlite";

export class SettingHandler {
    private readonly user: string

    constructor(user: string) {
        this.user = user;
    }

    async select(): Promise<string> {
        let res = Promise.resolve()
            .then(() => {
                console.debug(`select start, user=${this.user}`);
                return this.user
            }).then((user) => {
                return selectOne(selectUserIdByNameSql(user))
            }).then((user) => {
                return selectOne(selectSettingByUserIdSql(user["ID"]))
            }).catch((err) => {
                console.error(err)
            }).finally(() => {
                console.debug(`select end, user=${this.user}`);
            })

        let ans = await res
        return ans["CONTENT"]
    }

    async update(content: object): Promise<void> {
        const value = JSON.stringify(content)

        let res = Promise.resolve()
            .then(() => {
                console.debug(`update start, user=${this.user}, content=${value}`);
                return this.user
            }).then((name) => {
                return selectOne(selectUserIdByNameSql(name))
            }).then((user) => {
                return selectOne(selectSettingByUserIdSql(user["ID"]))
            }).then((one) => {
                return exec(updateSettingSql(one["ID"], value))
            }).catch((err) => {
                console.error(err)
            }).finally(() => {
                console.debug(`update end, user=${this.user}, content=${value}`);
            })

        return res
    }

}