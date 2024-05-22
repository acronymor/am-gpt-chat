import React from 'react'
import {NodePanelProps} from "@/app/unit/canvas/node/base/types";
import {LLMNodeType} from "@/app/unit/canvas/node/llm/types";
import {Modal} from "@/app/ui/lib/modal";
import {IconButton} from "@/app/ui/lib/button";
import DownloadIcon from "@/app/icons/download.svg";
import {useNodesInteractions} from "@/app/unit/canvas/hooks/use-nodes-interactions";
import {useWorkflowStore} from "@/app/store/workflow";
import {List, ListItem} from "@/app/ui/lib/list";
import {InputNumber, InputText} from "@/app/ui/lib/input";
import {OpenAILLm} from "@/app/provider/openai/config";
import {INodeParams} from "@/app/provider/base/interface";

const to_element = (params: INodeParams) => {
    let element = undefined
    switch (params.type) {
        case "number":
            element =
                <InputNumber onChange={(e) => console.log(e)} uKey={params.label} uValue={params.placeholder}
                             min={params.option.min}
                             max={params.option.max}/>
            break
        case "boolean":
            element = <InputText onChange={(e) => console.log(e)} uKey={params.label} uValue={params.placeholder}/>
            break
        default:
            element = <InputText onChange={(e) => console.log(e)} uKey={params.label} uValue={params.placeholder}/>
            break
    }

    return element
}


const Panel = ({id, data}: NodePanelProps<LLMNodeType>) => {
    const {handleNodeSelect} = useNodesInteractions()
    const {updateModal} = useWorkflowStore()

    const node = new OpenAILLm()

    return (
        <>
            {data.selected &&
                <Modal title={"llm"}
                       onClose={() => {
                           updateModal("")
                           handleNodeSelect(id, true)
                       }}

                       actions={[
                           <IconButton
                               key={"OK"}
                               icon={<DownloadIcon/>}
                               text={"确认"}
                               onClick={() => {
                                   console.log("确认")
                               }}
                           />
                       ]}
                >
                    <List>
                        {node.inputs.map(t => <ListItem key={t.name} title={t.label}>{to_element(t)}</ListItem>)}
                    </List>
                </Modal>
            }
        </>
    )
}
export default React.memo(Panel)