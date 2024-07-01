import '@/global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import { HomeworkProvider } from '@/context/Homework'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomeworkProvider>
      <App />
    </HomeworkProvider>
  </React.StrictMode>,
)
