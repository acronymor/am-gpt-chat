export const ROLES = ["system", "user", "assistant"] as const;
export type MessageRole = (typeof ROLES)[number];

export enum StoreKey {
    Config = "app-setting",
    CHAT = "app-chat",
    CANVAS = "app-canvas",
    Mask = "app-mask",
}