import React from 'react'
import {LLMNodeType} from "@/app/unit/canvas/node/llm/types";
import {NodeProps} from "@/app/unit/canvas/node/base/types";


const Node = ({data}: NodeProps<LLMNodeType>) => {
    const {provider, name: modelId} = data.model || {}

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
            {modelId}
        </div>
    )
}
export default React.memo(Node)