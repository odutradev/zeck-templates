const Error = () => {
    return (
        <main className="container">
            <h1>Page Not Found</h1>
            <div>
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