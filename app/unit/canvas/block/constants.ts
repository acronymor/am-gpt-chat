import {BlockClassificationEnum} from './types'
import {NodeEnum} from "@/app/unit/canvas/node/base/types";

export type Block = {
    classification: BlockClassificationEnum
    type: NodeEnum,
    title: string
    description?: string
}

export const BLOCKS: Block[] = [
    {
        classification: BlockClassificationEnum.Default,
        type: NodeEnum.Start,
        title: 'Start',
        description: '',
    },
    {
        classification: BlockClassificationEnum.Default,
        type: NodeEnum.LLM,
        title: 'LLM',
    },
    {
        classification: BlockClassificationEnum.Default,
        type: NodeEnum.End,
        title: 'End',
    },
    {
        classification: BlockClassificationEnum.Default,
        type: NodeEnum.Answer,
        title: 'Direct Answer',
    },
    {
        classification: BlockClassificationEnum.QuestionUnderstand,
        type: NodeEnum.QuestionClassifier,
        title: 'Question Classifier',
    },
    {
        classification: BlockClassificationEnum.Logic,
        type: NodeEnum.IfElse,
        title: 'IF/ELSE',
    },
    {
        classification: BlockClassificationEnum.Transform,
        type: NodeEnum.VariableAssigner,
        title: 'Variable Assigner',
    }
]

export const BLOCK_CLASSIFICATIONS: BlockClassificationEnum[] = [
    BlockClassificationEnum.Default,
    BlockClassificationEnum.QuestionUnderstand,
    BlockClassificationEnum.Logic,
    BlockClassificationEnum.Transform,
]
