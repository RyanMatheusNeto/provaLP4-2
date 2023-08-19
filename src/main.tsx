import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FontStyles } from './assets/fonts/fonts'


import './i18n/i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <FontStyles />
    <App />
  </BrowserRouter>
)
