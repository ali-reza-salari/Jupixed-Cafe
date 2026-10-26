import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "/public/css/loader.css"
import App from './App.jsx'
import {ThemeProvider} from "./contexts/Theme.jsx";

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
      <StrictMode>
          <App />
      </StrictMode>
  </ThemeProvider>
)
