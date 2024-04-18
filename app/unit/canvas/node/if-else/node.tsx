import React from 'react'
import {IfElseNodeType} from "@/app/unit/canvas/node/if-else/types";
import {NodeProps} from "@/app/unit/canvas/node/base/types";


const Node = ({data}: NodeProps<IfElseNodeType>) => {
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
            {data.logical_operator}
        </div>
    )
}
export default React.memo(Node)