import React from "react";
import WorkflowContainer from "@/app/unit/canvas/flow";

export default async function Page({params}: { params: { id: number } }) {
    return (<WorkflowContainer/>)
}