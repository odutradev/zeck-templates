import { ToastContainer } from 'react-toastify';
import { createRoot } from 'react-dom/client';
import { StrictMode, useEffect } from 'react';

import { toastContainerConfig } from '@assets/data/toast';
import defaultConfig from '@assets/config/default';
import Router from '@routes/index';

const App = () => {
  useEffect(() => {
    console.log(`version: ${defaultConfig.version} - mode: ${defaultConfig.mode}`);
  }, []);

  return (
    <>
      <ToastContainer {...toastContainerConfig} />
      <Router />
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
