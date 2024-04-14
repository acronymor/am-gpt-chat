import React from 'react';
import {NodeInputHandler} from "@/app/unit/canvas/node-input";
import {NodeOutputHandler} from "@/app/unit/canvas/node-output";
import {IconButton} from "@/app/ui/lib/button";

export default function CanvasNode({data}: {
    data: { inputAnchors: string[], inputParams: string[], outputAnchors: string[] }
}) {
    return <div>
        <IconButton title={"Duplicate"} text={"复制"}/>
        <IconButton title={"Delete"} text={"删除"}/>
        <IconButton title={"Info"} text={"详情"}/>

        {
            data.inputAnchors?.map((param: string, index) => (<NodeInputHandler key={index} data={param}/>))
        }
        {
            data.inputParams?.map((param: string, index) => (<NodeInputHandler key={index} data={param}/>))
        }
        {
            data.outputAnchors?.map((param: string, index) => (<NodeOutputHandler key={index} data={param}/>))
        }

    </div>;
};