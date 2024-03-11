import React from "react";
import { useNavigate } from "react-router-dom";



const isAuthenticated  = () => {
    return !!localStorage.getItem('userToken');
}

const PrivateRoute = ({ element: Component, ...rest }) => {

    const navigate = useNavigate();


    return (
        isAuthenticated() ? <Component {...rest} /> : <navigate to="/login" />
    );
};

export default PrivateRoute;