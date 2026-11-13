import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { Flex } from './componetes/Flex.tsx'
import { Form } from './componetes/Form.tsx'
import { Grid } from './componetes/Grid.tsx'
import Index from './componetes/Index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/app" element={<App />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/flex" element={<Flex />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)