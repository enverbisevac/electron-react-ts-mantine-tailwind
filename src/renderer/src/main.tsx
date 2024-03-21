import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import '@mantine/core/styles.css'

import { MantineProvider } from '@mantine/core'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>
)
