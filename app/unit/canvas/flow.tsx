'use client'

import 'reactflow/dist/style.css';
import flow_style from "@/app/unit/canvas/flow.module.scss"

import React, {memo, useEffect} from 'react';
import ReactFlow, {Background, Controls, ReactFlowProvider, useEdgesState, useNodesState, Viewport} from 'reactflow';
import {useKeyPress,} from 'ahooks'

import CanvasNode from '@/app/unit/canvas/node';
import CanvasEdge from "@/app/unit/canvas/edge";
import CanvasPanel from "@/app/unit/canvas/panel";
import {useNodesInteractions} from "@/app/unit/canvas/hooks/use-nodes-interactions";
import {useEdgesInteractions} from "@/app/unit/canvas/hooks/use-edges-interactions";

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

    const {
        handleNodeConnect,
        handleNodeConnectStart,
        handleNodeConnectEnd,
        handleNodeClick
    } = useNodesInteractions()
    const {
        handleEdgeEnter,
        handleEdgeDelete,
        handleEdgeLeave,
        handleEdgesChange,
    } = useEdgesInteractions()

    useKeyPress(['delete'], handleEdgeDelete)


    return (
        <div className={flow_style["flow"]}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onNodeClick={handleNodeClick}
                onConnect={handleNodeConnect}
                onConnectStart={handleNodeConnectStart}
                onConnectEnd={handleNodeConnectEnd}
                onEdgeMouseEnter={handleEdgeEnter}
                onEdgeMouseLeave={handleEdgeLeave}
                onEdgesChange={handleEdgesChange}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                snapToGrid={true}
                fitView
                attributionPosition="bottom-left"
            >
                <Controls style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}/>
                <Background
                    gap={[16, 16]}
                    size={2}
                    color="#E4E5E7"
                />
                <CanvasPanel/>
            </ReactFlow>
        </div>
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