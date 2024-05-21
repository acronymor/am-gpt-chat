import React, {ComponentType, useMemo} from 'react'
import {CommonNodeType, Node, PanelEnum} from "@/app/unit/canvas/node/base/types";
import LLMPanel from "@/app/unit/canvas/node/llm/panel"
import AnswerPanel from "@/app/unit/canvas/node/answer/panel"
import IfElsePanel from "@/app/unit/canvas/node/if-else/panel"
import StartPanel from "@/app/unit/canvas/node/start/panel"
import EndPanel from "@/app/unit/canvas/node/end/panel"
import BasePanel from "@/app/unit/canvas/node/base/panel";
import {useNodes} from "reactflow";
import {useWorkflowStore} from "@/app/store/workflow";

const PanelComponentMap: Record<string, ComponentType<any>> = {
    [PanelEnum.Start]: StartPanel,
    [PanelEnum.End]: EndPanel,
    [PanelEnum.LLM]: LLMPanel,
    [PanelEnum.IfElse]: IfElsePanel,
    [PanelEnum.Answer]: AnswerPanel,
}

const CustomPanel = (props: Node) => {
    const nodeData = props.data
    const PanelComponent = PanelComponentMap[nodeData.type]

    return (
        <BasePanel {...props}>
            <PanelComponent/>
        </BasePanel>
    )
}

const CanvasPanel = () => {
    const workflowStore = useWorkflowStore()
    const modal = workflowStore.getModal()

    const nodes = useNodes<CommonNodeType>()
    const selectedNode = nodes.find(node => node.id === modal)

    const {showNodePanel} = useMemo(() => {
        return {
            showNodePanel: !!selectedNode
        }
    }, [selectedNode])
    return (
        <>
            {showNodePanel && <CustomPanel {...selectedNode!}/>}
        </>
    )
}

CanvasPanel.displayName = 'CanvasPanel'

export default React.memo(CanvasPanel)