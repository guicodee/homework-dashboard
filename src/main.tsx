import '@/global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import { HomeworkProvider } from '@/context/Homework'
import { Toaster } from '@/components/ui/toaster'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomeworkProvider>
      <App />
      <Toaster />
    </HomeworkProvider>
  </React.StrictMode>,
)
