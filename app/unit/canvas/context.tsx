import {createContext, ReactNode, useContext, useRef,} from 'react'
import {createWorkflowStore} from "@/app/store/workflow";

type WorkflowStore = ReturnType<typeof createWorkflowStore>

export const WorkflowContext = createContext<WorkflowStore | null>(null)

type WorkflowProviderProps = { children: ReactNode }
export const WorkflowContextProvider = ({children}: WorkflowProviderProps) => {
    const storeRef = useRef<WorkflowStore>()

    if (!storeRef.current)
        storeRef.current = createWorkflowStore()

    return (
        <WorkflowContext.Provider value={storeRef.current}>
            {children}
        </WorkflowContext.Provider>
    )
}

export const useWorkflowStore = () => {
    return useContext(WorkflowContext)!
}