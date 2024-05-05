import {ComparisonOperator} from "@/app/unit/canvas/node/if-else/types";

export const isEmptyRelatedOperator = (operator: ComparisonOperator) => {
    return [ComparisonOperator.empty, ComparisonOperator.notEmpty, ComparisonOperator.isNull, ComparisonOperator.isNotNull].includes(operator)
}

const notTranslateKey = [
    ComparisonOperator.equal, ComparisonOperator.notEqual,
    ComparisonOperator.largerThan, ComparisonOperator.largerThanOrEqual,
    ComparisonOperator.lessThan, ComparisonOperator.lessThanOrEqual,
]

export const isComparisonOperatorNeedTranslate = (operator?: ComparisonOperator) => {
    if (!operator)
        return false
    return !notTranslateKey.includes(operator)
}