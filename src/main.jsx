import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ItemContextProvider from './context/ItemContextProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ItemContextProvider>
      <App />
    </ItemContextProvider>
  </React.StrictMode>
)
