import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// se elimino import index.css para que no joda
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
