import React from 'react'
import {NodePanelProps} from "@/app/unit/canvas/node/base/types";
import {AnswerNodeType} from "@/app/unit/canvas/node/answer/types";
import {useCanvasStore} from "@/app/store/canvas";
import {Modal} from "@/app/ui/lib/modal";
import {IconButton} from "@/app/ui/lib/button";
import DownloadIcon from "@/app/icons/download.svg";


const Panel = ({data}: NodePanelProps<AnswerNodeType>) => {
    const store = useCanvasStore()
    return (
        <>
            {store.showModal &&
                <Modal title={"answer"}
                       onClose={() => store.setShowModal(false)}
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