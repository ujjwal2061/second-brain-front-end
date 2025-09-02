
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/them-provider.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
     <ThemeProvider>   
     <App />
     </ThemeProvider>
  </BrowserRouter>

)
