import {NextRequest, NextResponse} from "next/server";
import {getOkResponse} from "@/app/api/util/response";

async function handlePost(request: NextRequest) {
    let body = await request.json()
    console.log(body)
    const res = getOkResponse(body);
    return NextResponse.json(res)
}

async function handleGet(request: NextRequest) {
    return NextResponse.json({"code": "ok"})
}

export const POST = handlePost;
export const GET = handleGet;