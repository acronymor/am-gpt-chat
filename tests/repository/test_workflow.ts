import {WorkflowRepository} from "@/app/repository/workflow";

describe("#repostiry", () => {
    it("workflow", async () => {
        const workflow = await new WorkflowRepository().initialize()
        const res = await workflow.getById(1)
        console.log(res)
    })
})