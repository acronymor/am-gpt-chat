import {createPersistStore} from "@/app/store/store";
import {AppConfig, SubmitKey, Theme} from "@/app/proto/setting";
import {getSetting} from "@/app/ui/util/fetch_util";


const createDefaultSetting = function (): AppConfig {
    return {
        theme: Theme.Auto,
        submitKey: SubmitKey.Enter
    } as AppConfig;
}


export const useAppConfigStore = createPersistStore(
    createDefaultSetting(),
    (set, _get) => ({
        get: () => {
            getSetting("generic", (response) => {
                let data = response?.data
                let config = data?.config
                set({..._get(), theme: config.theme, submitKey: config.submitKey})
                _get().markUpdate()
            })
        }
    }),
    {
        name: "app-setting"
    }
)