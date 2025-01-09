import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContextProvider from './context/ThemeContext.jsx'
import { WeatherContextProvider } from './context/WeatherContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <WeatherContextProvider>
        <App />
      </WeatherContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
