import React from 'react'
import {NodePanelProps} from "@/app/unit/canvas/node/base/types";
import {EndNodeType} from "@/app/unit/canvas/node/end/types";
import {Modal} from "@/app/ui/lib/modal";
import {IconButton} from "@/app/ui/lib/button";
import DownloadIcon from "@/app/icons/download.svg";
import {useNodesInteractions} from "@/app/unit/canvas/hooks/use-nodes-interactions";


const Panel = ({id, data}: NodePanelProps<EndNodeType>) => {
    const {handleNodeSelect} = useNodesInteractions()

    return (
        <>
            {data.selected &&
                <Modal title={"end"}
                       onClose={() => handleNodeSelect(id, true)}
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