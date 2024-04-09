import 'reactflow/dist/style.css';

import React, {useCallback, useEffect, useState} from 'react';
import ReactFlow, {
    addEdge,
    Connection,
    Controls,
    Node,
    MiniMap,
    Position,
    useEdgesState,
    useNodesState
} from 'reactflow';

import CanvasNode from '@/app/unit/canvas/node';

const initBgColor = '#fff';

const connectionLineStyle: { stroke: string } =  {stroke: '#ff0000'};
const snapGrid: [number, number] = [20, 20];
const nodeTypes = {
    selectorNode: CanvasNode,
};

const defaultViewport = {x: 0, y: 0, zoom: 1.5};

const CustomNodeFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [bgColor, setBgColor] = useState(initBgColor);

    useEffect(() => {
        const onChange = (event: any) => {
            setNodes((nds) =>
                nds.map((node) => {
                    if (node.id !== '2') {
                        return node;
                    }

                    const color = event.target.value;

                    setBgColor(color);

                    return {
                        ...node,
                        data: {
                            ...node.data,
                            color,
                        },
                    };
                })
            );
        };

        setNodes([
            {
                id: '1',
                type: 'input',
                data: {label: 'An input node'},
                position: {x: 0, y: 50},
                sourcePosition: Position.Right,
            },
            {
                id: '2',
                type: 'selectorNode',
                data: {onChange: onChange, color: initBgColor},
                style: {backgroundColor: '#ff0000', border: '1px solid #777', borderRadius: '3px', padding: 10 },
                position: {x: 300, y: 50},
            },
            {
                id: '3',
                type: 'output',
                data: {label: 'Output A'},
                position: {x: 650, y: 25},
                style: {backgroundColor: '#0000ff'},
                targetPosition: Position.Left,
            },
            {
                id: '4',
                type: 'output',
                data: {label: 'Output B'},
                position: {x: 650, y: 100},
                style: {backgroundColor: '#00ff00'},
                targetPosition: Position.Left,
            },
        ]);

        setEdges([
            {
                id: 'e1-2',
                source: '1',
                target: '2',
                animated: true,
                style: {stroke: '#ff0000'},
            },
            {
                id: 'e2a-3',
                source: '2',
                target: '3',
                sourceHandle: 'a',
                animated: true,
                style: {stroke: '#0000ff'},
            },
            {
                id: 'e2b-4',
                source: '2',
                target: '4',
                sourceHandle: 'b',
                animated: true,
                style: {stroke: '#004200'},
            },
        ]);
    }, []);

    const onConnect = useCallback(
        (params: Connection) =>
            setEdges((eds) => addEdge({...params, animated: true, style: {stroke: '#fff'}}, eds)),
        []
    );
    return (
    <ReactFlow
        nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            style={{background: bgColor}}
            nodeTypes={nodeTypes}
            connectionLineStyle={connectionLineStyle}
            snapToGrid={true}
            snapGrid={snapGrid}
            defaultViewport={defaultViewport}
            fitView
            attributionPosition="bottom-left"
        >
            <MiniMap
                nodeStrokeColor={(n: Node<{ label: string }>): string => {
                    if (n.type === 'input') {
                        return '#0041d0';
                    }
                    if (n.type === 'selectorNode') {
                        return bgColor;
                    }
                    if (n.type === 'output') {
                        return '#ff0072';
                    }

                    return '#666666'
                }}
                nodeColor={(n) => {
                    if (n.type === 'selectorNode') {
                        return bgColor;
                    }
                    return '#808080';
                }}
                style={{backgroundColor: '#363636'}}
            />
            <Controls/>
        </ReactFlow>
    );
};

export default CustomNodeFlow;