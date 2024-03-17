import {createPersistStore} from "@/app/store/store";
import {AppConfig, ChatGptConfig, LlmType} from "@/app/proto/llm";


const createDefaultSetting = function (): AppConfig {
    return {
        "llm": [
            {
                "model": "chatgpt",
                "isEnabled": true,
                "config": {
                    "openAIApiKey": "",
                    "temperature": 0,
                    "topP": 1,
                    "timeout": 3000,
                    "modelName": "gpt-3.5-turbo",
                    "n": 1,
                    "streaming": false,
                    "configuration": {
                        "baseURL": "",
                        "organization": "acronymor"
                    }
                }
            }
        ]
    } as AppConfig;
}


export const useAppConfigStore = createPersistStore(
    createDefaultSetting(),
    (set, get) => ({
        init: async () => {
            const response = await fetch('/api/setting', {
                method: "GET",
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                cache: "no-cache"
            });
            const res = await response.json();
            if (res?.code == 200) {
                set(res?.data as AppConfig);
            } else {
                set(createDefaultSetting());
            }
        },
        save: async (config: AppConfig) => {
            const response = await fetch('/api/setting', {
                method: "POST",
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                cache: "no-cache",
                body: JSON.stringify(config)
            });
            const res = await response.json()
            if (res?.code == 200) {
                console.log("Save success")
            } else {
                console.log("Save failed")
            }
        },
        getAll: (): AppConfig => {
            return get();
        },
        getChatGpt: (): ChatGptConfig => {
            const response = get().llm.filter(t => t.model == LlmType.CHATGPT)[0]
            console.log("get")
            return response.config as ChatGptConfig
        },
        updateChatGpt: (config: ChatGptConfig) => {
            let cfg = get()
            for (const llm of cfg.llm) {
                if (llm.model == LlmType.CHATGPT) {
                    console.log("set")
                    llm.config = config;
                }
            }
            set({...cfg, lastUpdateTime: Date.now(),});
        }
    }),
    {
        name: "app-setting"
    }
)