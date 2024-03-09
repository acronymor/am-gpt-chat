import {getOkResponse, ResponseResult} from "@/app/api/util/response"


describe("#response", () => {
    it("demo", () => {
        const res = new ResponseResult.Builder<string>().code(200).message("success").data("Hello Kitty").build();
        expect(res).toBeTruthy()
    })

    it("get", () => {
        expect(getOkResponse({"code": 200})).toBeTruthy()
    })
})