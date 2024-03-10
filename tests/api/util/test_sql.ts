import {update_setting_sql} from "@/app/api/util/sql";

describe("#sql", () => {
    it("update_setting", async () => {
        let content = {"llm": [{"model": "chatgpt", "isEnable": true}]}
        let sql: string = update_setting_sql(1, JSON.stringify(content));
        console.log(sql);
    })
})