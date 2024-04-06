import {TemplateHandler} from "@/app/db/handler";
import {MaskConfig} from "@/app/proto/mask";

export async function getAllMask(): Promise<MaskConfig[]> {
    const templateHandler = new TemplateHandler("admin")
    return await templateHandler.select() as MaskConfig[]
}