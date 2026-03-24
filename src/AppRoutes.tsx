import { Route, Routes } from "react-router";
import TaskList from "./ListTask";
import CreateTask from "./CreateTask";
import AppShellTask from "./AppShell";
import '@mantine/core/styles.css';
import EditTask from "./EditTask";


const AppRoutes = () => {
    return (
        <Routes >
            <Route element={<AppShellTask />}>
                <Route path="/" element={<TaskList />}></Route>
                <Route path="/create-task" element={<CreateTask />}></Route>
                <Route path="/edit-task/:id" element={<EditTask />}></Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes;