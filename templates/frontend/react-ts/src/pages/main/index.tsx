import { useState } from 'react';
import './styles.css';
import logo from '@assets/imgs/logo.svg'

const Main = () => {
  const [count, setCount] = useState(0);

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
      
      <div className="button-container">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </main>
  );
};

export default Main;