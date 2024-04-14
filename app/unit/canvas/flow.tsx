import 'reactflow/dist/style.css';

import React, {useCallback, useEffect} from 'react';
import ReactFlow, {addEdge, Connection, Controls, MiniMap, Node, useEdgesState, useNodesState} from 'reactflow';

import CanvasNode from '@/app/unit/canvas/node';
import CanvasEdge from "@/app/unit/canvas/edge";

const nodeTypes = {node: CanvasNode}
const edgeTypes = {edge: CanvasEdge}

export default function Flow() {

    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
        setNodes([
            {
                id: '1',
                type: 'node',
                data: {inputAnchors: ["1. a"], inputParams: ["1.abcdefgh"], outputAnchors: ["1. b"]},
                position: {x: 0, y: 50},
            },
            {
                id: '2',
                type: 'node',
                data: {inputAnchors: ["2. a"], inputParams: ["2.abcdefgh"], outputAnchors: ["2. b"]},
                position: {x: 300, y: 50},
            },
            {
                id: '3',
                type: 'node',
                data: {inputAnchors: ["3. a"], inputParams: ["3.abcdefgh"], outputAnchors: ["3. b"]},
                position: {x: 650, y: 25},
            },
            {
                id: '4',
                type: 'node',
                data: {inputAnchors: ["4. a"], inputParams: ["4.abcdefgh"], outputAnchors: ["4. b"]},
                position: {x: 650, y: 100},
            },
        ]);

        setEdges([
            {source: '1', target: '2', id: 'e1-2', animated: true,},
            {source: '2', target: '3', id: 'e2a-3', animated: true,},
            {source: '2', target: '4', id: 'e2b-4', animated: true,},
        ]);
    }, []);

    const onConnect = useCallback(
        (params: Connection) =>
            setEdges((edge) => addEdge({...params, animated: true}, edge)),
        []
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