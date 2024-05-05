import {NodeDefault, NodeEnum, VarType} from "@/app/unit/canvas/node/base/types";
import {VariableAssignerNodeType} from "@/app/unit/canvas/node/variable-assigner/types";
import {ALL_CHAT_AVAILABLE_BLOCKS, ALL_COMPLETION_AVAILABLE_BLOCKS} from "@/app/unit/canvas/hooks/constants";

const i18nPrefix = 'workflow'

const nodeDefault: NodeDefault<VariableAssignerNodeType> = {
    defaultValue: {
        output_type: VarType.string,
        variables: [],
    },
    getAvailablePrevNodes(isChatMode: boolean) {
        const nodes = isChatMode
            ? ALL_CHAT_AVAILABLE_BLOCKS
            : ALL_COMPLETION_AVAILABLE_BLOCKS.filter(type => type !== NodeEnum.End)
        return nodes.filter(type => type !== NodeEnum.IfElse && type !== NodeEnum.QuestionClassifier)
    },
    getAvailableNextNodes(isChatMode: boolean) {
        const nodes = isChatMode ? ALL_CHAT_AVAILABLE_BLOCKS : ALL_COMPLETION_AVAILABLE_BLOCKS
        return nodes
    },
    checkValid(payload: VariableAssignerNodeType, t: any) {
        let errorMessages = ''
        const {variables} = payload
        if (!variables || variables.length === 0)
            errorMessages = t(`${i18nPrefix}.errorMsg.fieldRequired`, {field: t(`${i18nPrefix}.nodes.variableAssigner.title`)})
        if (!errorMessages) {
            variables.forEach((variable) => {
                if (!variable || variable.length === 0)
                    errorMessages = t(`${i18nPrefix}.errorMsg.fieldRequired`, {field: t(`${i18nPrefix}.errorMsg.fields.variableValue`)})
            })
        }

        return {
            isValid: !errorMessages,
            errorMessage: errorMessages,
        }
    },
}

export default nodeDefault
