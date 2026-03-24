import { createContext, type ReactElement } from "react";
import { useImmer } from "use-immer";
import type { CreateTaskDto, TaskDto } from "./types";


interface createContextState {
    state: ContextState,
    createTask: (task: CreateTaskDto) => void,
    updateTask: (task: TaskDto) => void,
    deleteTask: (id: string) => void,
}
export const TaskContext = createContext<createContextState | null>(null);

interface TaskProviderProps {
    children: ReactElement;
}

interface ContextState {
    tasklist: TaskDto[]
}

export const TaskProvider = (props: TaskProviderProps) => {
    const [state, setState] = useImmer<ContextState>({
        tasklist: []
    })

    const createTask = (task: CreateTaskDto) => {
        setState(draft => {
            draft.tasklist.push({
                ...task,
                id: crypto.randomUUID(),
                createdAt: new Date().toISOString(),
                updateAt: new Date().toISOString(),
            });
        })
    }

    const updateTask = (task: TaskDto) => {
        setState(draft => {
            draft.tasklist = draft.tasklist.map(eachTask => {
                if (eachTask.id === task.id) {
                    return { ...task, updateAt: new Date().toISOString() }
                }
                return eachTask;
            })
        })
    }

    const deleteTask = (id: string) => {
        setState(draft => {
            draft.tasklist = draft.tasklist.filter(eachTask => eachTask.id !== id)
        })
    }
    return (
        <TaskContext.Provider value={{ state, createTask, updateTask, deleteTask }}>
            {props.children}
        </TaskContext.Provider>
    )
}

