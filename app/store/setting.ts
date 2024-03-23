import {createPersistStore} from "@/app/store/store";
import {AppConfig, GenericConfig, SubmitKey, Theme} from "@/app/proto/setting";
import {getSetting} from "@/app/ui/util/fetch_util";
import {StoreKey} from "@/app/constant";


const createDefaultSetting = function (): AppConfig {
    return {
        theme: Theme.Auto,
        submitKey: SubmitKey.Enter
    } as AppConfig;
}


export const useAppConfigStore = createPersistStore(
    createDefaultSetting(),
    (set, _get) => ({
        get: async () => {
            const data = await getSetting<GenericConfig>("generic")
            set({..._get(), theme: data.theme, submitKey: data.submitKey})
            _get().markUpdate()
        }
    }),
    {
        name: StoreKey.Config
    }
)