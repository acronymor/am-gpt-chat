'use client'

import input_style from "@/app/ui/lib/input.module.scss"
import {useDebouncedCallback} from "use-debounce";
import {useState} from "react";


interface InputRangeProps {
    onChange: (uKey: string, uValue: number) => void;
    uKey: string,
    uValue: number;
    title?: string;
    className?: string;
    min: number;
    max: number;
    step: number;
}

export function InputRange({onChange, uKey, uValue, title, className, min, max, step,}: InputRangeProps) {
    const [value, setValue] = useState(uValue)

    const update = useDebouncedCallback(async (key: string, value: any) => {
        onChange(key, value)
    }, 500);

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
                onChange={(e) => {
                    const tmp = parseFloat(e.currentTarget.value)
                    setValue(tmp)
                    update(uKey, tmp)
                }}
            />
        </div>
    );
}

interface InputNumberProps {
    onChange: (uKey: string, uValue: number) => void;
    uKey: string,
    uValue: number;
    title?: string;
    min: number;
    max: number;
    className?: string;
}

export function InputNumber({onChange, uKey, uValue, title, min, max, className}: InputNumberProps) {
    const [value, setValue] = useState(uValue)

    const update = useDebouncedCallback(async (key: string, value: any) => {
        onChange(key, value)
    }, 500);

    return (
        <input
            type="number"
            title={title}
            value={value}
            min={min}
            max={max}
            onChange={(e) => {
                const tmp = parseInt(e.currentTarget.value)
                setValue(tmp)
                update(uKey, tmp)
            }}
        />
    );
}

interface InputTextProps {
    onChange: (uKey: string, uValue: string) => void;
    title?: string;
    uKey: string,
    uValue: string;
    className?: string;
}


export function InputText({onChange, uKey, uValue, title, className}: InputTextProps) {
    const [value, setValue] = useState(uValue)

    const update = useDebouncedCallback(async (key: string, value: any) => {
        onChange(key, value)
    }, 500);

    return (
        <input
            type="text"
            title={title}
            value={value}
            onChange={(e) => {
                const tmp = e.currentTarget.value
                setValue(tmp)
                update(uKey, tmp)
            }}
        />
    );
}
