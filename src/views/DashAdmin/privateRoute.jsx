import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";



const isAuthenticated  = () => {
    return !!localStorage.getItem('userToken');
}

const PrivateRoute = ({ element: Component, ...rest }) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate("/login");
        }
    }, [navigate]);


    return isAuthenticated() ? <Component {...rest} /> : null;
};

export default PrivateRoute;