import React from 'react'
import {StartNodeType} from "@/app/unit/canvas/node/start/types";
import {NodeProps} from "@/app/unit/canvas/node/base/types";


const Node = ({data}: NodeProps<StartNodeType>) => {
    const {variables} = data

    return (
        <div
            style={{
                height: "100px",
                width: "200px",
                border: "1px solid black",
                textAlign: "center",
                lineHeight: "100px"
            }}
        >
            {variables.join(", ")}
        </div>
    )
}
export default React.memo(Node)