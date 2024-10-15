const Error = () => {
    return (
        <main>
            <h1>Page Not Found</h1>
            <div className="card">
                <button onClick={() => {
                    window.location.href = '/'
                }}>
                back to home
                </button>
            </div> 
        </main>
    );
};

export default Error;