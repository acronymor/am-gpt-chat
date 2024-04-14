import {Handle, Position} from "reactflow";
import {OutputParam} from "@/app/proto/node";

export function NodeOutputHandler({data}: { data: OutputParam}) {
    return (
        <div>
            <div>
                <Handle
                    type="source"
                    position={Position.Right}
                />
            </div>

            <div>{data.label}</div>
        </div>
    )
}