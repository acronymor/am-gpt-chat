import {nanoid} from "nanoid";
import {StoreKey} from "@/app/constant";
import {createPersistStore} from "@/app/store/store";
import {Message} from "ai";

export interface ChatStat {
    tokenCount: number;
    wordCount: number;
    charCount: number;
}


export interface ChatSession {
    id: string;
    topic: string;

    memoryPrompt: string;
    messages: Message[];
    stat: ChatStat;
    lastUpdate: number;
    lastSummarizeIndex: number;
    clearContextIndex?: number;
}


function createEmptySession(id: string, lastUpdate: number): ChatSession {
    return {
        id: id,
        topic: "新的聊天",
        memoryPrompt: "",
        messages: [],
        stat: {
            tokenCount: 0,
            wordCount: 0,
            charCount: 0,
        },
        lastUpdate: lastUpdate,
        lastSummarizeIndex: 0,
    };
}

const DEFAULT_CHAT_STATE = {
    sessions: [createEmptySession("none", 0)],
    currentSessionIndex: 0,
};


export const useChatStore = createPersistStore(
    DEFAULT_CHAT_STATE,
    (set, get) => ({
        newSession: () => {
            const session = createEmptySession(nanoid(), Date.now());

            set((state) => ({
                currentSessionIndex: 0,
                sessions: [session].concat(state.sessions)
            }))
        },

        deleteSession: (index: number) => {
            const deletingLastSession = get().sessions.length === 1;
            const deletedSession = get().sessions.at(index);

            if (!deletedSession) return;

            const sessions = get().sessions.slice();
            sessions.splice(index, 1);

            const currentIndex = get().currentSessionIndex;
            let nextIndex = Math.min(
                currentIndex - Number(index < currentIndex),
                sessions.length - 1,
            );

            if (deletingLastSession) {
                nextIndex = 0;
                sessions.push(createEmptySession(nanoid(), Date.now()));
            }

            set(() => ({
                currentSessionIndex: nextIndex,
                sessions,
            }));
        },

        selectSession: (index: number) => {
            console.log(`select session + ${index}`)
            set({currentSessionIndex: index})
        },

        moveSession: (from: number, to: number) => {
            set((state) => {
                const {sessions, currentSessionIndex: oldIndex} = state;

                // move the session
                const newSessions = [...sessions];
                const session = newSessions[from];
                newSessions.splice(from, 1);
                newSessions.splice(to, 0, session);

                // modify current session id
                let newIndex = oldIndex === from ? to : oldIndex;
                if (oldIndex > from && oldIndex <= to) {
                    newIndex -= 1;
                } else if (oldIndex < from && oldIndex >= to) {
                    newIndex += 1;
                }

                return {
                    currentSessionIndex: newIndex,
                    sessions: newSessions,
                };
            });
        },

        currentSession: (): ChatSession => {
            let index = get().currentSessionIndex;
            const sessions = get().sessions;

            if (index < 0 || index >= sessions.length) {
                index = Math.min(sessions.length - 1, Math.max(0, index));
                set(() => ({currentSessionIndex: index}));
            }

            return sessions[index];
        },

        changeSession: (session: ChatSession) => {
            const index = get().currentSessionIndex
            const newSessions = [...get().sessions];
            newSessions[index] = session

            set(() => ({
                currentSessionIndex: index,
                sessions: newSessions,
            }))
            get().markUpdate()
        },
    }),

    {
        name: StoreKey.CHAT
    }
)