import {useEffect, useState} from "react";
import modal_style from "@/app/ui/lib/modal.module.scss"
import MaxIcon from "@/app/icons/max.svg"
import MinIcon from "@/app/icons/min.svg"
import CloseIcon from "@/app/icons/close.svg"


interface ModalProps {
    title: string;
    children?: any;
    actions?: React.ReactNode[];
    defaultMax?: boolean;
    footer?: React.ReactNode;
    onClose?: () => void;
}

export function Modal(props: ModalProps) {
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                props.onClose?.();
            }
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [isMax, setMax] = useState(false)

    return (
        <div className={modal_style["modal-container"] + ` ${isMax && modal_style["modal-container-max"]}`}>
            <div className={modal_style["modal-header"]}>
                <div className={modal_style["modal-title"]}>{props.title}</div>

                <div className={modal_style["modal-header-actions"]}>
                    <div
                        className={modal_style["modal-header-action"]}
                        onClick={() => setMax(!isMax)}
                    >
                        {isMax ? <MinIcon/> : <MaxIcon/>}
                    </div>
                    <div
                        className={modal_style["modal-header-action"]}
                        onClick={props.onClose}
                    >
                        <CloseIcon/>
                    </div>
                </div>
            </div>

            <div className={modal_style["modal-content"]}>{props.children}</div>

            <div className={modal_style["modal-footer"]}>
                {props.footer}
                <div className={modal_style["modal-actions"]}>
                    {props.actions?.map((action, i) => (
                        <div key={i} className={modal_style["modal-action"]}>
                            {action}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}