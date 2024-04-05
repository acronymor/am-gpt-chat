import chat_input_style from "@/app/ui/unit/chat/[id]/chat-input.module.scss";
import {IconChatAction} from "@/app/ui/unit/chat/[id]/chat-action";
import ResetIcon from "@/app/icons/reload.svg";
import DeleteIcon from "@/app/icons/clear.svg";
import PinIcon from "@/app/icons/pin.svg";
import CopyIcon from "@/app/icons/copy.svg";
import {copyToClipboard} from "@/app/ui/util/bar_util";
import {Message} from "ai";

export function ChatActionBar(props: { message: Message }) {
    return (
        <div className={chat_input_style["chat-input-actions"]}>
            <IconChatAction icon={<ResetIcon/>} text={"Retry"} onClick={() => console.log("RETRY")}/>
            <IconChatAction icon={<DeleteIcon/>} text={"Delete"} onClick={() => console.log("DELETE")}/>
            <IconChatAction icon={<PinIcon/>} text={"Pin"} onClick={() => console.log("PinIcon")}/>
            <IconChatAction icon={<CopyIcon/>} text={"Copy"} onClick={() => copyToClipboard(props.message.content)}/>
        </div>
    )
}