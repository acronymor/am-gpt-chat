'use client'

import 'reactflow/dist/style.css';
import flow_style from "@/app/unit/canvas/flow.module.scss"

import React, {memo} from 'react';
import ReactFlow, {
    Background,
    Controls,
    Edge as EdgeType,
    Node as NodeType,
    Panel,
    ReactFlowProvider,
    Viewport
} from 'reactflow';
import {useKeyPress,} from 'ahooks'

import CanvasNode from '@/app/unit/canvas/node';
import CanvasEdge from "@/app/unit/canvas/edge";
import CanvasPanel from "@/app/unit/canvas/panel";
import {useNodesInteractions} from "@/app/unit/canvas/hooks/use-nodes-interactions";
import {useEdgesInteractions} from "@/app/unit/canvas/hooks/use-edges-interactions";
import {useWorkflowInit} from "@/app/unit/canvas/hooks/use-workflow";
import {CanvasHeader} from "@/app/unit/canvas/header";

const nodeTypes = {custom: CanvasNode}
const edgeTypes = {custom: CanvasEdge}

function WorkFlow({canvas_node, canvas_edge, viewport}: {
    canvas_node: NodeType[],
    canvas_edge: EdgeType[],
    viewport: Viewport
}) {
    const {
        handleNodeDrag,
        handleNodeConnect,
        handleNodeConnectStart,
        handleNodeConnectEnd,
        handleNodeDeleteSelected,
        handleNodeClick,
        handleNodeDoubleClick
    } = useNodesInteractions()

    const {
        handleEdgeEnter,
        handleEdgeDelete,
        handleEdgeLeave,
        handleEdgesChange,
    } = useEdgesInteractions()

    useKeyPress(['delete'], handleEdgeDelete)
    useKeyPress(['delete'], handleNodeDeleteSelected)

    return (
        <div className={flow_style["flow"]}>
            <ReactFlow
                nodes={canvas_node}
                edges={canvas_edge}
                onNodeClick={handleNodeClick}
                onNodeDoubleClick={handleNodeDoubleClick}
                onNodeDrag={handleNodeDrag}
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
                <Panel position={"top-left"} style={{width: "100%", left: "-1.9%", top: "-15px", backgroundColor: 'var(--white)'}}>
                    <CanvasHeader/>
                </Panel>
                <CanvasPanel/>
            </ReactFlow>
        </div>
    );
}


const WorkflowWrapper = () => {
    const {id, name, config} = useWorkflowInit()
    const {nodes, edges, viewport} = config

    return (
        <ReactFlowProvider>
            <WorkFlow canvas_node={nodes} canvas_edge={edges} viewport={viewport}/>
        </ReactFlowProvider>
    )
}
WorkflowWrapper.displayName = "Graph"

export default memo(WorkflowWrapper)