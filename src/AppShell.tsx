import { AppShell, Burger, NavLink } from '@mantine/core';
import { Outlet, useNavigate } from 'react-router';

const AppShellTask = () => {


    const navigate = useNavigate();

    return <AppShell
        padding="md"
        header={{ height: 60 }}
    >
        <AppShell.Header>
            <Burger
                hiddenFrom="sm"
                size="sm"
            />
            <div>Logo</div>
        </AppShell.Header>

        <AppShell.Navbar >

            <NavLink
                label="Create Task"
                variant="subtle"
                active
                onClick={()=>navigate("/create-task")}
            />
        </AppShell.Navbar>
        <AppShell.Main ml="100px"><Outlet /></AppShell.Main>
    </AppShell>

}

export default AppShellTask;