import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import UpsellPage from './pages/UpsellPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UpsellPage />
  </StrictMode>,
);
