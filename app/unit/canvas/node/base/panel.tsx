import React, {cloneElement, ReactElement} from "react";
import {Node} from "@/app/unit/canvas/node/base/types";

type BasePanelProps = {
    children: ReactElement
} & Node
const BasePanel = ({id, data, children}: BasePanelProps) => {
    return (
        <div>
            {cloneElement(children, {id, data})}
        </div>)
}

export default React.memo(BasePanel)