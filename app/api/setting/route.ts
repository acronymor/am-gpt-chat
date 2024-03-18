import {NextRequest, NextResponse} from "next/server";
import {ResponseResult} from "@/app/api/util/response";
import {SettingHandler} from "@/app/api/util/handler";

async function handlePost(request: NextRequest) {
    let body = await request.json()
    let handler = new SettingHandler("admin")
    await handler.update(body)
    return NextResponse.json(ResponseResult.Ok(''))
}

async function handleGet(request: NextRequest) {
    const params = request.nextUrl.searchParams
    let handler = new SettingHandler("admin")
    let res = JSON.parse(await handler.select())
    const type = params.get("type") ?? "generic"
    return NextResponse.json(ResponseResult.Ok(res[type]))
}

export const POST = handlePost;
export const GET = handleGet;