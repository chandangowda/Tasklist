import { useContext } from "react";
import { TaskContext } from "./TaskContext";
import { Button, Group, Table, Text } from "@mantine/core";
import { useNavigate } from "react-router";

const TaskList = () => {
    const context = useContext(TaskContext);
    const navigate = useNavigate();

    const navigateToEditTask = (id: string) => {
        navigate(`/edit-task/${id}`);
    }
    const rows = context?.state.tasklist.map((element) => (
        <Table.Tr key={element.id}>
            <Table.Td>{element.title}</Table.Td>
            <Table.Td>{element.description}</Table.Td>
            <Table.Td>{element.status}</Table.Td>
            <Table.Td>{element.priority}</Table.Td>
            <Table.Td>{element.createdAt}</Table.Td>
            <Table.Td>{element.updateAt}</Table.Td>
            <Table.Td><Group>
                <Button onClick={() => navigateToEditTask(element.id)}>Edit</Button>
                <Button onClick={() => {
                    context?.deleteTask(element.id)
                }}>Delete</Button>
            </Group></Table.Td>
        </Table.Tr>
    ));
    return (!context?.state.tasklist || context?.state.tasklist.length === 0 ?
        <Group justify="center"><Text >No Tasks yet. Create one!</Text></Group> :
        <Table stickyHeader stickyHeaderOffset={60}>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Title</Table.Th>
                    <Table.Th>Description</Table.Th>
                    <Table.Th>Status</Table.Th>
                    <Table.Th>Priority</Table.Th>
                    <Table.Th>Created At</Table.Th>
                    <Table.Th>Updated At</Table.Th>
                    <Table.Th>Action</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    )
}

export default TaskList;