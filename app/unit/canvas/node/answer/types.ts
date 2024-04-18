import {CommonNodeType, Variable} from "@/app/unit/canvas/node/base/types";

export type AnswerNodeType = CommonNodeType & {
    variables: Variable[]
    answer: string
}