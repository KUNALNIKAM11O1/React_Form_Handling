import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Class_App from './Class_App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <App /> */}

   <Class_App/>
  </StrictMode>,
)
