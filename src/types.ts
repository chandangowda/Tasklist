export const enum TastStatus {
    PENDING = "pending",
    Completed = 'completed'
}

export const enum TaskPriority {
    low = "low",
    medium = 'medium',
    high = "high"
}

export interface CreateTaskDto {
    title: string,
    description: string,
    status: TastStatus,
    priority: TaskPriority
}

export interface TaskDto {
    id: string,
    title: string,
    description: string,
    status: TastStatus,
    priority: TaskPriority,
    createdAt?: string,
    updateAt?: string
}