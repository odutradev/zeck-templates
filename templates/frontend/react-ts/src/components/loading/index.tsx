import { useState, useEffect } from 'react';

import './styles.css';

import type { LoadingProps } from './types';

const Loading = ({ showSpinner = true, message = 'Carregando' }: LoadingProps) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      {showSpinner && <div className="loading-spinner" />}
      <h6 className="loading-message">
        {message}{dots}
      </h6>
    </div>
  );
};

export default Loading;