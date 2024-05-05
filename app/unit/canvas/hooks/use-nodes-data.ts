import {useMemo} from "react";
import {produce} from "immer";
import {NodeEnum} from "@/app/unit/canvas/node/base/types";
import {NODES_EXTRA_DATA, NODES_INITIAL_DATA} from "@/app/unit/canvas/hooks/constants";

export const useNodesInitialData = () => {
    return useMemo(() => produce(NODES_INITIAL_DATA, (draft) => {
        Object.keys(draft).forEach((key) => {
            draft[key as NodeEnum].title = `workflow.blocks.${key}`
        })
    }), [])
}

export const useNodesExtraData = () => {
    return useMemo(() => produce(NODES_EXTRA_DATA, (draft) => {
        Object.keys(draft).forEach((key) => {
            draft[key as NodeEnum].about = `workflow.blocksAbout.${key}`
            draft[key as NodeEnum].availablePrevNodes = draft[key as NodeEnum].getAvailablePrevNodes(true)
            draft[key as NodeEnum].availableNextNodes = draft[key as NodeEnum].getAvailableNextNodes(true)
        })
    }), [])
}
