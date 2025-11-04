import './styles.css';

const NotFound = () => {
  return (
    <div className="notfound-page-container">
      <div className="error-content-wrapper">
        <h1 className="error-title">
          404
        </h1>
        
        <p className="error-message">
          Sorry, the page you are looking for does not exist.
        </p>
        
        <a href="/" className="error-button-link">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;