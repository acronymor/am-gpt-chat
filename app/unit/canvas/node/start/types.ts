import {CommonNodeType, InputVar} from "@/app/unit/canvas/node/base/types";

export type StartNodeType = CommonNodeType & {
    variables: InputVar[]
}