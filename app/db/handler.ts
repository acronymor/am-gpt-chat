import {
    deleteMaskByIdSql,
    getAllTemplateByUserNameSql,
    selectSettingByUserNameSql,
    updateSettingSql
} from "@/app/db/sql";
import {exec, selectAll, selectOne} from "@/app/db/sqlite";

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
                return selectOne(selectSettingByUserNameSql(user))
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
            }).then((user) => {
                return selectOne(selectSettingByUserNameSql(user));
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

export class TemplateHandler {
    private readonly user: string

    constructor(user: string) {
        this.user = user;
    }

    async select(): Promise<any> {
        let res = Promise.resolve()
            .then(() => {
                console.debug(`select start, user=${this.user}`);
                return this.user
            }).then((user) => {
                return selectAll(getAllTemplateByUserNameSql(user))
            }).catch((err) => {
                console.error(err)
            }).finally(() => {
                console.debug(`select end, user=${this.user}`);
            });
        return res;
    }

    async delete(id: number): Promise<any> {
        let res = Promise.resolve()
            .then(() => {
                console.debug(`delete start, user=${this.user}`);
                return this.user
            }).then((user) => {
                return exec(deleteMaskByIdSql(id))
            }).catch((err) => {
                console.error(err)
            }).finally(() => {
                console.debug(`delete end, user=${this.user}`);
            });
        return res;
    }
}