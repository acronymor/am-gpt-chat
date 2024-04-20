'use client'

import 'reactflow/dist/style.css';

import React, {memo, useEffect} from 'react';
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    ReactFlowProvider,
    useEdgesState,
    useNodesState,
    Viewport
} from 'reactflow';

import CanvasNode from '@/app/unit/canvas/node';
import CanvasEdge from "@/app/unit/canvas/edge";
import {useNodesInteractions} from "@/app/unit/canvas/hooks/use-nodes-interactions";

const nodeTypes = {custom: CanvasNode}
const edgeTypes = {custom: CanvasEdge}

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

    const {handleNodeConnect} = useNodesInteractions()

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={handleNodeConnect}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            snapToGrid={true}
            fitView
            attributionPosition="bottom-left"
        >
            <MiniMap style={{backgroundColor: '#363636'}}/>
            <Controls style={{
                display: 'flex',
                flexDirection: 'row',
            }}/>
            <Background color={"#aaa"} gap={16}/>
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