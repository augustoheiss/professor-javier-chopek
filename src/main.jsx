import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'

import Home from './pages/Home'
import ClassesLayout from './pages/ClassesLayout'
import ClassDetail from './pages/ClassDetail'
import NotFound from './pages/NotFound'
import { classesData } from './data/classesData'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clases" element={<ClassesLayout />}>
          <Route index element={<Navigate to={`/clases/${classesData[0].slug}`} replace />} />
          <Route path=":slug" element={<ClassDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
