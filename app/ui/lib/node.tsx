import React, {JSX} from "react"
import node_style from "@/app/ui/lib/node.module.scss";
import RunIcon from "@/app/icons/run.svg";
import DotsIcon from "@/app/icons/dots.svg";

export function IconNode(props: {
    children?: JSX.Element,
    onClick?: () => void,
    icon?: JSX.Element,
    className?: string,
    title?: string,
    desc?: string,
    selected: boolean,
}) {
    return (
        <div className={`${node_style["icon-node"]}  ${props.selected && node_style["icon-node-selected"]}`}
             onClick={props.onClick}>
            <div style={{display: "block", position: "absolute", top: "-20px", right: "0px"}}>
                <RunIcon/>
                <DotsIcon/>
            </div>

            <div style={{display: "flex"}}>
                {
                    props.icon && (
                        <div className={`${node_style["icon-node-icon"]}`}>{props.icon} </div>
                    )
                }
                {
                    props.title && (
                        <div className={node_style["icon-node-text"]}>{props.title}</div>
                    )
                }
            </div>

            {props.children}
        </div>
    )

}