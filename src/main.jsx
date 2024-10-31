import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { NoahApp } from './NoahApp';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NoahApp />
    </BrowserRouter>
    
  </StrictMode>,
)
