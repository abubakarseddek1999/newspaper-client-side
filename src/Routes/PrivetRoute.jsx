/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivetRoute = ({children}) => {
    const {user,loading}=useAuth();

    const location =useLocation();
    console.log(location.pathname);

    if(loading){
      
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivetRoute;