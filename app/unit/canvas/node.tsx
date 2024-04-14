import React from 'react';
import {NodeInputHandler} from "@/app/unit/canvas/node-input";
import {NodeOutputHandler} from "@/app/unit/canvas/node-output";
import {Data, InputParam, OutputParam} from "@/app/proto/node";

export default function CanvasNode({data}: { data: Data }
) {
    return (<div>

        {/*
        <IconButton title={"Duplicate"} text={"复制"}/>
        <IconButton title={"Delete"} text={"删除"}/>
        <IconButton title={"Info"} text={"详情"}/>
        */}

        {
            data.inputAnchors.map((param: InputParam, index) => {
                return (
                    <div key={index}>
                        <div>{param.name}</div>
                        <NodeInputHandler data={param}/>
                    </div>
                )
            })
        }
        {
            data.inputParams.map((param: InputParam, index) => (<NodeInputHandler key={index} data={param}/>))
        }
        {
            data.outputAnchors.map((param: OutputParam, index) => (<NodeOutputHandler key={index} data={param}/>))
        }
        {
            data.outputParams.map((param: OutputParam, index) => (<NodeOutputHandler key={index} data={param}/>))
        }

    </div>);
};