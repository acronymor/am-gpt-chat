import React from 'react'
import {AnswerNodeType} from "@/app/unit/canvas/node/answer/types";
import {NodeProps} from "@/app/unit/canvas/node/base/types";


const Node = ({data}: NodeProps<AnswerNodeType>) => {
    const {answer} = data

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
            {answer}
        </div>
    )
}
export default React.memo(Node)