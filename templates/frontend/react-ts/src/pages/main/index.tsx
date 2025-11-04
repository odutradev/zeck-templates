import { useState } from 'react';

import logo from '@assets/imgs/logo.svg'
import './styles.css';

const Main = () => {
  
  const [count, setCount] = useState(0);
  const modules = ['React', 'TypeScript', 'Vite'];

  return (
    <main className="main-container">
      <img 
        src={logo}
        className="main-logo" 
        alt="Zeck Logo" 
      />
      
      <h1 className="main-title">
        Zeck React Typescript Boilerplate + Vite
      </h1>
      
      <div className="chips-container">
        {modules.map((module) => (
          <span key={module} className="chip">
            {module}
          </span>
        ))}
      </div>
      
      <div className="button-container">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </main>
  );
};

export default Main;