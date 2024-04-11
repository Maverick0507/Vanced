import react from 'react';
import reactDOm from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './context/Theme';
const root = reactDOm.createRoot(document.getElementById('root'))

root.render
    (

        <ThemeProvider>
            <App />
        </ThemeProvider>
    )