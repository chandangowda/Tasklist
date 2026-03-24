import { BrowserRouter } from 'react-router'
import './App.css'
import { TaskProvider } from './TaskContext'
import AppRoutes from './AppRoutes'
import { MantineProvider } from '@mantine/core'



function App() {

  return (
    <TaskProvider>
      <MantineProvider >
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </MantineProvider >

    </TaskProvider>
  )
}

export default App
