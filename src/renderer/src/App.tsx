import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import { BrowserRouter, Routes } from 'react-router-dom'
import PersistentDrawerLeft from './components/Sidebar'
import { CssBaseline } from '@mui/material'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <BrowserRouter>
      <CssBaseline/>
      <nav>
        <PersistentDrawerLeft/>
      </nav>

      <Routes>

        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
