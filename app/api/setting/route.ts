import {NextRequest, NextResponse} from "next/server";
import {ResponseResult} from "@/app/api/util/response";
import {SettingHandler} from "@/app/api/setting/handler";

async function handlePost(request: NextRequest) {
    let body = await request.json()
    let handler = new SettingHandler("admin")
    await handler.update(body)
    return NextResponse.json(ResponseResult.Ok(''))
}

async function handleGet() {
    let handler = new SettingHandler("admin")
    let res = await handler.select()
    return NextResponse.json(ResponseResult.Ok(JSON.parse(res)))
}

export const POST = handlePost;
export const GET = handleGet;