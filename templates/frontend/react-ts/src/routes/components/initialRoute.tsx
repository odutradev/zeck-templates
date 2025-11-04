import { Navigate } from "react-router-dom";

const InitialRoute = () => localStorage.getItem("token") != null ? <Navigate to="/main" replace/> : <Navigate to="/signin" />;

export default InitialRoute