import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth';


export const PrivateRoute = ({ children }) => {

    // Verificamos si esta autenticado
    const { logged } = useContext(AuthContext);

    // Obtenemos el ultmo path esto viene de react 6 
    const { pathname, search } = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);


    return (logged)
        ? children
        : <Navigate to="/login" />
}
