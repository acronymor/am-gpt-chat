import {exec} from "@/app/api/util/sqlite";

describe("#exec", () => {
    it("db.all(sql)", async () => {
        const sql = "SELECT * FROM t_setting"
        const res = await exec(sql)
        expect(res).toBeTruthy()
    })
})