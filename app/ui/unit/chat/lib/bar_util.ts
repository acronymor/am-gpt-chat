import {showToast} from "@/app/ui/lib/toast";

export async function copyToClipboard(text: string) {
    try {
        if (window.__TAURI__) {
            window.__TAURI__.writeText(text);
        } else {
            await navigator.clipboard.writeText(text);
        }
        showToast("已写入剪切板");
    } catch (error) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand("copy");
            showToast("已写入剪切板");
        } catch (error) {
            showToast("复制失败，请赋予剪切板权限");
        }
        document.body.removeChild(textArea);
    }
}

