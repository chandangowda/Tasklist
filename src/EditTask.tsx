import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { TaskContext } from "./TaskContext";
import { useImmer } from "use-immer";
import { TaskPriority, TastStatus, type TaskDto } from "./types";
import { Button, Group, Select, Textarea, TextInput } from "@mantine/core";

const EditTask = () => {
    const [state, setState] = useImmer<TaskDto>({
        description: '',
        id: '',
        priority: TaskPriority.low,
        status: TastStatus.PENDING,
        title: '',
    })

    const { id } = useParams();

    const taskContext = useContext(TaskContext);

    const navigate = useNavigate();

    useEffect(() => {
        const editingTask = taskContext?.state.tasklist.find(eachTask => eachTask.id === id);

        if (editingTask) {
            setState(draft => {
                draft.id = editingTask.id;
                draft.title = editingTask.title;
                draft.description = editingTask.description;
                draft.createdAt = editingTask.createdAt;
                draft.updateAt = editingTask.updateAt;
                draft.status = editingTask.status;
                draft.priority = editingTask.priority;
            })
        }

    }, [id, taskContext]);
    

    const onTitleChange = (event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        event.preventDefault();
        const value = event.target.value;
        setState(draft => {
            draft.title = value;
        })
    }

    const onDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>) => {
        event.preventDefault();
        const value = event.target.value;
        setState(draft => {
            draft.description = value;
        })
    }

    const updateTask = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        taskContext?.updateTask({
            id: state.id,
            title: state.title,
            description: state.description,
            status: state.status,
            priority: state.priority,
            createdAt: state.createdAt
        })
        navigate("/");
    }

    const onStatusUpdate = (value: string | null) => {
        if (value) {
            setState(draft => {
                draft.status = value as TastStatus;
            })
        }
    }

    const onPriorityUpdate = (value: string | null) => {
        if (value) {
            setState(draft => {
                draft.priority = value as TaskPriority;
            })
        }
    }

    return (
        <form onSubmit={(event) => updateTask(event)}>
            <TextInput
                withAsterisk
                maxLength={100}
                label="Title"
                placeholder="Enter Tile for Task"
                onChange={(event) => onTitleChange(event)}
                value={state.title}
            />
            <Textarea
                maxLength={500}
                label="Description"
                placeholder="Enter Description for Task"
                onChange={(event) => onDescriptionChange(event)}
                value={state.description}
            />

            <Select
                label="Task Status"
                placeholder="Update Task Status"
                value={state.status}
                data={[TastStatus.PENDING, TastStatus.Completed]}
                onChange={(value => onStatusUpdate(value))}
            />
            <Select
                label="Task Priority"
                placeholder="Update Task Priority"
                value={state.priority}
                data={[TaskPriority.low, TaskPriority.medium, TaskPriority.high]}
                onChange={(value => onPriorityUpdate(value))}

            />


            <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </form>
    )

}

export default EditTask;