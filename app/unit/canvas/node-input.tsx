import {Handle, Position} from "reactflow";

export function NodeInputHandler({data}: { data: string }) {
    return (
        <div>
            <div>
                <Handle
                    type="target"
                    position={Position.Left}
                />
            </div>

            <div>{data}</div>
        </div>
    )
}