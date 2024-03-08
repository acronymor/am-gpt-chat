import input_style from "@/app/api/lib/input.module.scss"


interface InputRangeProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    title?: string;
    value: number | string;
    className?: string;
    min: string;
    max: string;
    step: string;
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

interface InputProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    title?: string;
    value: number | string;
    className?: string;
    min: number;
    max: number;
}

export function InputNumber({onChange, title, value, className, min, max,}: InputProps) {
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

