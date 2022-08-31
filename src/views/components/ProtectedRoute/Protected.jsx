import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
    
const isAuthenticated = localStorage.getItem("onibata-user");
const main = JSON.parse(isAuthenticated)
 if (!main.isLoggedIn) {
 return <Navigate to="/signin" replace />;
 }
 return children;
};
export default Protected;