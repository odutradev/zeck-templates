import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import Router from './routes/index.jsx';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);