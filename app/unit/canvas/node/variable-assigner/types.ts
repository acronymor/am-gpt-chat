import {CommonNodeType, ValueSelector, VarType} from "@/app/unit/canvas/node/base/types";

export type VariableAssignerNodeType = CommonNodeType & {
    output_type: VarType
    variables: ValueSelector[]
}
