import {CommonNodeType, InputVar} from "@/app/unit/canvas/node/base/types";

export type EndNodeType = CommonNodeType & {
    variables: InputVar[]
}