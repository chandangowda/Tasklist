import { useImmer } from "use-immer";
import { TaskPriority, TastStatus, type CreateTaskDto } from "./types";
import { Button, Group, Textarea, TextInput } from "@mantine/core";
import { useContext } from "react";
import { TaskContext } from "./TaskContext";
import { useNavigate } from "react-router";


const CreateTask = () => {
    const [stateTask, setStateTask] = useImmer<CreateTaskDto>({
        title: '',
        description: '',
        status: TastStatus.PENDING,
        priority: TaskPriority.low
    });

    const taskContext = useContext(TaskContext);

    const navigate = useNavigate();

    const onTitleChange = (event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        event.preventDefault();
        const value = event.target.value;
        setStateTask(draft => {
            draft.title = value;
        })
    }

    const onDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>) => {
        event.preventDefault();
        const value = event.target.value;
        setStateTask(draft => {
            draft.description = value;
        })
    }

    const createNewTask = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        taskContext?.createTask({
            title: stateTask.title,
            description: stateTask.description,
            status: stateTask.status,
            priority: stateTask.priority
        })
        navigate("/");
    }

    return <form onSubmit={(event) => createNewTask(event)}>
        <TextInput
            withAsterisk
            label="Title"
            placeholder="Enter Tile for Task"
            onChange={(event) => onTitleChange(event)}
            value={stateTask.title}
            maxLength={100}
        />
        <Textarea
            maxLength={500}
            label="Description"
            placeholder="Enter Description for Task"
            onChange={(event) => onDescriptionChange(event)}
            value={stateTask.description}
        />
        <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
        </Group>
    </form>
}

export default CreateTask;