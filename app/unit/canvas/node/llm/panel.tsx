import React from 'react'
import {NodePanelProps} from "@/app/unit/canvas/node/base/types";
import {LLMNodeType} from "@/app/unit/canvas/node/llm/types";
import {Modal} from "@/app/ui/lib/modal";
import {IconButton} from "@/app/ui/lib/button";
import DownloadIcon from "@/app/icons/download.svg";
import {useNodesInteractions} from "@/app/unit/canvas/hooks/use-nodes-interactions";
import {useWorkflowStore} from "@/app/store/workflow";
import {List, ListItem} from "@/app/ui/lib/list";
import {InputRange, InputText} from "@/app/ui/lib/input";


const Panel = ({id, data}: NodePanelProps<LLMNodeType>) => {
    const {handleNodeSelect} = useNodesInteractions()
    const {updateModal} = useWorkflowStore()

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
                        <ListItem title={"Temperature"}>
                            <InputText onChange={(e) => {
                                console.log(e)
                            }} uKey={"temperature"} uValue={"temperature"}/>
                        </ListItem>
                        <ListItem title={"TopP"}>
                            <InputRange onChange={(e) => console.log(e)} uKey={"topP"} uValue={1} min={0} max={1} step={0.1}/>
                        </ListItem>
                        <ListItem title={"MaxTokens"}>
                            <InputRange onChange={(e) => console.log(e)} uKey={"max tokens"} uValue={10240} min={1024} max={51200} step={1}/>
                        </ListItem>
                    </List>
                </Modal>
            }
        </>
    )
}
export default React.memo(Panel)