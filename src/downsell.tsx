import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import DownsellPage from './pages/DownsellPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DownsellPage />
  </StrictMode>,
);
