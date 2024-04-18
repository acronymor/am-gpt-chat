'use client'

import 'reactflow/dist/style.css';

import React, {memo, useEffect} from 'react';
import ReactFlow, {Controls, MiniMap, ReactFlowProvider, useEdgesState, useNodesState, Viewport} from 'reactflow';

import CustomNode from '@/app/unit/canvas/node';
import CustomEdge from "@/app/unit/canvas/edge";

const nodeTypes = {custom: CustomNode}
const edgeTypes = {custom: CustomEdge}

function WorkFlow({canvas_node, canvas_edge, viewport}: {
    canvas_node: any[],
    canvas_edge: any[],
    viewport: Viewport
}) {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
        setNodes(canvas_node)
        setEdges(canvas_edge)
    }, []);


    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            snapToGrid={true}
            fitView
            attributionPosition="bottom-left"
        >
            <MiniMap style={{backgroundColor: '#363636'}}/>
            <Controls/>
        </ReactFlow>
    );
};


const WorkflowContainer = ({nodes, edges, viewport}: {
    nodes: any[],
    edges: any[],
    viewport: Viewport
}) => {
    return (
        <ReactFlowProvider>
            <WorkFlow canvas_node={nodes} canvas_edge={edges} viewport={viewport}/>
        </ReactFlowProvider>
    )
}
WorkflowContainer.displayName = "Graph"

export default memo(WorkflowContainer)