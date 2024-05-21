import {IconButton} from "@/app/ui/lib/button";
import CloseIcon from "@/app/icons/close.svg";
import SaveIcon from "@/app/icons/save.svg";
import {useWorkflow} from "@/app/unit/canvas/hooks/use-workflow";
import {useWorkflowStore} from "@/app/store/workflow";


export function CanvasHeader() {
    const {saveWorkflow} = useWorkflow()
    const {getCurrent, getWorkflow} = useWorkflowStore()

    const onSave = () => {
        const draft = getWorkflow(getCurrent())
        saveWorkflow(draft)
    }

    return (
        <div className={"window-header"}>
            <div className={"window-header-title"}>
                <div className={"window-header-main-title"}>
                    Canvas
                </div>
                <div className={"window-header-sub-title"}>
                    Canvas Demo
                </div>
            </div>

            <div className={"window-actions"}>
                <div className="window-action-button">
                    <IconButton
                        icon={<SaveIcon/>}
                        text={"保存"}
                        onClick={() => {
                            onSave()
                        }}
                    />
                </div>
                <div className={"window-action-button"}>
                    <IconButton icon={<CloseIcon/>}/>
                </div>
            </div>
        </div>
    )
}