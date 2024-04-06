import {NextRequest, NextResponse} from "next/server";
import {ResponseResult} from "@/app/api/util/response";
import {TemplateHandler} from "@/app/db/handler";
import {MaskConfig} from "@/app/proto/mask";

async function handlePost(request: NextRequest) {
    return NextResponse.json(ResponseResult.Ok(''))
}

async function handleGet(request: NextRequest) {
    const templateHandler = new TemplateHandler("admin")
    const config = await templateHandler.select() as MaskConfig
    return NextResponse.json(ResponseResult.Ok(config))
}

export const POST = handlePost;
export const GET = handleGet;