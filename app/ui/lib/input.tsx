import input_style from "@/app/ui/lib/input.module.scss"


interface InputRangeProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    title?: string;
    value: number | string;
    className?: string;
    min: number;
    max: number;
    step: number;
}

export function InputRange({onChange, title, value, className, min, max, step,}: InputRangeProps) {
    return (
        <div className={input_style["input-range"] + ` ${className ?? ""}`}>
            {title || value}
            <input
                type="range"
                title={title}
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={onChange}
            />
        </div>
    );
}

interface InputNumberProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    title?: string;
    value: number | string;
    className?: string;
    min: number;
    max: number;
}

export function InputNumber({onChange, title, value, className, min, max,}: InputNumberProps) {
    return (
        <input
            type="number"
            title={title}
            value={value}
            min={min}
            max={max}
            onChange={onChange}
        />
    );
}

interface InputTextProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    title?: string;
    value: number | string;
    className?: string;
}


export function InputText({onChange, title, value, className}: InputTextProps) {
    return (
        <input
            type="text"
            title={title}
            value={value}
            onChange={onChange}
        />
    );
}
