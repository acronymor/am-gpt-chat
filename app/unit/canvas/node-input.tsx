import {Handle, Position} from "reactflow";
import {InputParam} from "@/app/proto/node";

export function NodeInputHandler({data}: { data: InputParam }) {
    return (
        <div>
            <div>
                <Handle
                    type="target"
                    position={Position.Left}
                />
            </div>

            <div>{data.label}</div>
        </div>
    )
}