import DownIcon from "@/app/icons/down.svg";

import select_style from "@/app/api/lib/select.module.scss"


export function Select(
    props: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
) {
    const {className, children, ...otherProps} = props;
    return (
        <div className={`${select_style["select-with-icon"]} ${className}`}>
            <select className={select_style["select-with-icon-select"]} {...otherProps}>
                {children}
            </select>
            <DownIcon className={select_style["select-with-icon-icon"]}/>
        </div>
    );
}