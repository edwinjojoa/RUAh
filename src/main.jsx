import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RuahApp } from './RuahApp';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <RuahApp />
    </BrowserRouter>
    
  </StrictMode>,
)
