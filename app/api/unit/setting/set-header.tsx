import {IconButton} from "@/app/api/lib/button";
import CloseIcon from "@/app/icons/close.svg";


export function SetHeader() {
    return (
        <div className={"window-header"}>
            <div className={"window-header-title"}>
                <div className={"window-header-main-title"}>
                    Settings
                </div>
                <div className={"window-header-sub-title"}>
                    All Settings
                </div>
            </div>
            <div className={"window-actions"}>
                <div className={"window-action-button"}>
                    <IconButton icon={<CloseIcon/>}/>
                </div>
            </div>
        </div>
    )
}