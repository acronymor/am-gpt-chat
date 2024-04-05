import toast_style from "@/app/ui/lib/toast.module.scss"
import {createRoot} from "react-dom/client";


export type ToastProps = {
    content: string;
    action?: {
        text: string;
        onClick: () => void;
    };
    onClose?: () => void;
};

export function Toast(props: ToastProps) {
    return (
        <div className={toast_style["toast-container"]}>
            <div className={toast_style["toast-content"]}>
                <span>{props.content}</span>
                {props.action && (
                    <button
                        onClick={() => {
                            props.action?.onClick?.();
                            props.onClose?.();
                        }}
                        className={toast_style["toast-action"]}
                    >
                        {props.action.text}
                    </button>
                )}
            </div>
        </div>
    );
}

export function showToast(
    content: string,
    action?: ToastProps["action"],
    delay = 3000,
) {
    const div = document.createElement("div");
    div.className = toast_style.show;
    document.body.appendChild(div);

    const root = createRoot(div);
    const close = () => {
        div.classList.add(toast_style.hide);

        setTimeout(() => {
            root.unmount();
            div.remove();
        }, 300);
    };

    setTimeout(() => {
        close();
    }, delay);

    root.render(<Toast content={content} action={action} onClose={close}/>);
}
