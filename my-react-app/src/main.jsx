import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/Header/Header.css'
import Header from './components/Header/Header.jsx'
import CodeAnalyzer from './components/All/CodeAnalyzer.jsx'
import './style.css';
import IconPositionTabs from './components/All/IconPositionTabs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <CodeAnalyzer/>
  </StrictMode>,
)
