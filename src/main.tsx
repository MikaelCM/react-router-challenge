import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

import { CounterContextProvider } from './context/CounterContext.tsx'
import { TitleColorContextProvider } from './context/TitleColorContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    {/* 2 - Criando provider */}
      <CounterContextProvider>
        <TitleColorContextProvider>
          <App />
        </TitleColorContextProvider>
      </CounterContextProvider>
    </BrowserRouter>
  </StrictMode>
)