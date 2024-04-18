import data from "@/app/unit/canvas/data"
import React from "react";
import WorkflowContainer from "@/app/unit/canvas/flow";

export default async function Page() {
    return (<WorkflowContainer nodes={data.nodes} edges={data.edges} viewport={data.viewport}/>)
}