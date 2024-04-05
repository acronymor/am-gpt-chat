'use client'

import {IconButton} from "@/app/ui/lib/button";
import DownloadIcon from "@/app/icons/download.svg";
import UploadIcon from "@/app/icons/upload.svg";
import CloseIcon from "@/app/icons/close.svg";

export function MaskHeader(props: { count: number }) {
    return (
        <div className="window-header">
            <div className="window-header-title">
                <div className="window-header-main-title">
                    {"预设角色面具"}
                </div>
                <div className="window-header-submai-title">
                    {props.count} {"个预设角色定义"}
                </div>
            </div>

            <div className="window-actions">
                <div className="window-action-button">
                    <IconButton
                        icon={<DownloadIcon/>}
                        text={"导出"}
                        onClick={() => {
                            console.log("导出")
                        }}
                    />
                </div>
                <div className="window-action-button">
                    <IconButton
                        icon={<UploadIcon/>}
                        text={"导入"}
                        onClick={() => {
                            console.log("导入")
                        }}
                    />
                </div>
                <div className="window-action-button">
                    <IconButton
                        icon={<CloseIcon/>}
                        onClick={() => {
                            console.log("关闭")
                        }}
                    />
                </div>
            </div>
        </div>
    )
}