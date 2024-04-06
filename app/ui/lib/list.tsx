import list_style from "@/app/ui/lib/list.module.scss"
import {JSX} from "react"

export function List(props: { children: React.ReactNode; id?: string }) {
    return (
        <div className={list_style["list"]} id={props.id}>
            {props.children}
        </div>
    );
}

export function ListItem(props: {
    className?: string;
    title: string;
    subTitle?: string;
    children?: JSX.Element | JSX.Element[];
    icon?: JSX.Element;
    onClick?: () => void;
}) {
    return (
        <div
            className={list_style["list-item"] + ` ${props.className || ""}`}
            onClick={props.onClick}
        >
            <div className={list_style["list-header"]}>
                {props.icon && <div className={list_style["list-icon"]}>{props.icon}</div>}
                <div className={list_style["list-item-title"]}>
                    <div>{props.title}</div>
                    {props.subTitle && (
                        <div className={list_style["list-item-sub-title"]}>
                            {props.subTitle}
                        </div>
                    )}
                </div>
            </div>
            {props.children}
        </div>
    );
}