import {StoreKey} from "@/app/constant";
import {createPersistStore} from "@/app/store/store";

type CanvasNode = {
    id: string;
    showModal: boolean;
}

function createEmptyCanvas(id: string): CanvasNode {
    return {
        id: id,
        showModal: false,
    };
}

const DEFAULT_CANVAS_STATE = createEmptyCanvas("start");


export const useCanvasStore = createPersistStore(
    DEFAULT_CANVAS_STATE,
    (set, get) => ({
        setNode: (id: string) => {
            set({...get(), id: id})
            get().markUpdate()
        },

        setShowModal: (show: boolean) => {
            set({...get(), showModal: show})
            get().markUpdate()
        },
    }),

    {
        name: StoreKey.CANVAS
    }
)