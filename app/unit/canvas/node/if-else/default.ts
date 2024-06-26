import {NodeDefault, NodeEnum} from "@/app/unit/canvas/node/base/types";
import {IfElseNodeType, LogicalOperator} from "@/app/unit/canvas/node/if-else/types";
import {ALL_CHAT_AVAILABLE_BLOCKS, ALL_COMPLETION_AVAILABLE_BLOCKS} from "@/app/unit/canvas/hooks/constants";
import {isEmptyRelatedOperator} from "@/app/unit/canvas/node/if-else/utils";

const i18nPrefix = 'workflow.errorMsg'

const nodeDefault: NodeDefault<IfElseNodeType> = {
    defaultValue: {
        _targetBranches: [
            {
                id: 'true',
                name: 'IS TRUE',
            },
            {
                id: 'false',
                name: 'IS FALSE',
            },
        ],
        logical_operator: LogicalOperator.and,
        conditions: [],
    },
    getAvailablePrevNodes(isChatMode: boolean) {
        const nodes = isChatMode
            ? ALL_CHAT_AVAILABLE_BLOCKS
            : ALL_COMPLETION_AVAILABLE_BLOCKS.filter(type => type !== NodeEnum.End)
        return nodes
    },
    getAvailableNextNodes(isChatMode: boolean) {
        const nodes = isChatMode ? ALL_CHAT_AVAILABLE_BLOCKS : ALL_COMPLETION_AVAILABLE_BLOCKS
        return nodes.filter(type => type !== NodeEnum.VariableAssigner)
    },
    checkValid(payload: IfElseNodeType, t: any) {
        let errorMessages = ''
        const {conditions} = payload
        if (!conditions || conditions.length === 0)
            errorMessages = t(`${i18nPrefix}.fieldRequired`, {field: 'IF'})

        conditions.forEach((condition) => {
            if (!errorMessages && (!condition.variable_selector || condition.variable_selector.length === 0))
                errorMessages = t(`${i18nPrefix}.fieldRequired`, {field: t(`${i18nPrefix}.fields.variable`)})
            if (!errorMessages && !condition.comparison_operator)
                errorMessages = t(`${i18nPrefix}.fieldRequired`, {field: t('workflow.nodes.ifElse.operator')})
            if (!errorMessages && !isEmptyRelatedOperator(condition.comparison_operator!) && !condition.value)
                errorMessages = t(`${i18nPrefix}.fieldRequired`, {field: t(`${i18nPrefix}.fields.variableValue`)})
        })
        return {
            isValid: !errorMessages,
            errorMessage: errorMessages,
        }
    },
}

export default nodeDefault
