import React from 'react'
import {NodePanelProps} from "@/app/unit/canvas/node/base/types";
import {AnswerNodeType} from "@/app/unit/canvas/node/answer/types";
import {Modal} from "@/app/ui/lib/modal";
import {IconButton} from "@/app/ui/lib/button";
import DownloadIcon from "@/app/icons/download.svg";
import {useNodesInteractions} from "@/app/unit/canvas/hooks/use-nodes-interactions";
import {useWorkflowStore} from "@/app/store/workflow";


const Panel = ({id, data}: NodePanelProps<AnswerNodeType>) => {
    const {handleNodeSelect} = useNodesInteractions()
    const {updateModal} = useWorkflowStore()

    return (
        <>
            {data.selected &&
                <Modal title={"answer"}
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
                    <div>Hello World</div>
                </Modal>
            }
        </>
    )
}
export default React.memo(Panel)