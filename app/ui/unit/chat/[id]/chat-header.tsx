import {IconButton} from "@/app/ui/lib/button";
import RenameIcon from "@/app/icons/rename.svg";
import ShareIcon from "@/app/icons/share.svg";
import MaxIcon from "@/app/icons/max.svg";
import MinIcon from "@/app/icons/min.svg";

export function ChatHeader() {
    return (
        <div className={"window-header"}>
            <div className={"window-header-title"}>
                <div className={"window-header-main-title"}>
                    New Conversation
                </div>
                <div className={"window-header-sub-title"}>
                    999 messages
                </div>
            </div>
            <div className={"window-actions"}>
                <div className={"window-action-button"}>
                    <IconButton icon={<RenameIcon/>}/>
                </div>
                <div className={"window-action-button"}>
                    <IconButton icon={<ShareIcon/>}/>
                </div>
                <div className={"window-action-button"}>
                    <IconButton icon={<MaxIcon/>}/>
                </div>
                <div className={"window-action-button"}>
                    <IconButton icon={<MinIcon/>}/>
                </div>
            </div>
        </div>
    )
}