import {Handle, Position} from "reactflow";

export function NodeOutputHandler({data}: { data: string }) {
    return (
        <div>
            <div>
                <Handle
                    type="source"
                    position={Position.Right}
                />
            </div>

            <div>{data}</div>
        </div>
    )
}