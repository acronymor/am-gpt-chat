import button_style from "@/app/ui/lib/button.module.scss"

export function IconButton(props: {
    onClick?: () => void,
    className?: string,
    disabled?: boolean,
    icon?: JSX.Element
    title?: string
    text?: string
}) {
    return (
        <button className={button_style["icon-button"] + " " + button_style["shadow"] + ` ${props.className} clickable`}
                title={props.title}
                role={"button"}
                onClick={props.onClick}
                disabled={props.disabled ?? false}
        >
            {
                props.icon && (
                    <div className={button_style["icon-button-icon"]}>{props.icon}</div>
                )
            }

            {
                props.text && (
                    <div className={button_style["icon-button-text"]}>{props.text}</div>
                )
            }

        </button>
    )
}