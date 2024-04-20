import React from 'react'
import {NodePanelProps} from "@/app/unit/canvas/node/base/types";
import {StartNodeType} from "@/app/unit/canvas/node/start/types";
import {Modal} from "@/app/ui/lib/modal";
import {IconButton} from "@/app/ui/lib/button";
import DownloadIcon from "@/app/icons/download.svg";
import {useCanvasStore} from "@/app/store/canvas";


const Panel = ({data}: NodePanelProps<StartNodeType>) => {
    const store = useCanvasStore()
    return (
        <>
            {store.showModal &&
                <Modal title={"start"}
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