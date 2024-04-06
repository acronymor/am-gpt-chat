import {updateSettingSql} from "@/app/db/sql";

describe("#sql", () => {
    it("update_setting", async () => {
        let content = {"llm": [{"model": "chatgpt", "isEnable": true}]}
        let sql: string = updateSettingSql(1, JSON.stringify(content));
        console.log(sql);
    })
})