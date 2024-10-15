import { useState } from "react";

const Main = () => {
    const [count, setCount] = useState(0);

    return (
        <main>
            <h1>React Frontend Template + Zeck</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>
            </div> 
        </main>
    );
};

export default Main;