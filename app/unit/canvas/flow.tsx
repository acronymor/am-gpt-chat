'use client'

import 'reactflow/dist/style.css';

import React, {memo, useCallback, useEffect} from 'react';
import ReactFlow, {
    addEdge,
    Connection,
    Controls,
    Edge,
    MiniMap,
    Node,
    ReactFlowProvider,
    useEdgesState,
    useNodesState
} from 'reactflow';

import CanvasNode from '@/app/unit/canvas/node';
import CanvasEdge from "@/app/unit/canvas/edge";
import {Graph} from "@/app/proto/flow"

const nodeTypes = {node: CanvasNode}
const edgeTypes = {edge: CanvasEdge}

function WorkFlow({graph}: { graph: Graph }) {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
        setNodes(graph.nodes as Node[])
        setEdges(graph.edges as Edge[]);
    }, []);

    const onConnect = useCallback(
        (params: Connection) => {
            const newEdge = {
                ...params,
                id: `${params.source}-${params.sourceHandle}-${params.target}-${params.targetHandle}`
            }

            setEdges((edge) => addEdge({...newEdge, animated: true}, edge));
        }, []
    );

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
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


const WorkflowContainer = memo(({graph}: { graph: Graph }) => {
    return (
        <ReactFlowProvider>
            <WorkFlow graph={graph}/>
        </ReactFlowProvider>
    )
})
WorkflowContainer.displayName = "Graph"

export default memo(WorkflowContainer)