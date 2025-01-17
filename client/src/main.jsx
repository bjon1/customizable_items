import React from 'react'
import ReactDOM from 'react-dom/client'
import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import 'picocss/pico.min.css'

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)