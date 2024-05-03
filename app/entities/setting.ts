import {SubmitKey, Theme} from "@/app/config/constant";

export type Config = {
    theme: Theme
    submitKey: SubmitKey
}

export interface ISetting {
    config: Config;
}