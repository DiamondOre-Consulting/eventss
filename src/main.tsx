import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import SmoothScrollProvider from './components/SmoothScrollProvider.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <SmoothScrollProvider>
    <App />
    </SmoothScrollProvider>
  </BrowserRouter>,
)
