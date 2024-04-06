import {exec} from "@/app/db/sqlite";

describe("#exec", () => {
    it("db.all(sql)", async () => {
        const sql = "SELECT * FROM t_setting"
        const res = await exec(sql)
        expect(res).toBeTruthy()
    })
})