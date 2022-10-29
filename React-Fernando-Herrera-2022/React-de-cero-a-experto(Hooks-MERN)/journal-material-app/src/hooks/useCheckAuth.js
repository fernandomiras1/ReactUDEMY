import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
import { startLoadingNotes } from '../store/journal';


// Una forma de saber si estamos autenicado por Firebase.
export const useCheckAuth = () => {
  
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {
    
        onAuthStateChanged( FirebaseAuth, async( user ) => {
            if ( !user ) return dispatch( logout() );

            const { uid, email, displayName, photoURL } = user;
            // *** De esta forma nos Logiamos con Firebase y nos da la session Activa.
            dispatch( login({ uid, email, displayName, photoURL }) );
            
            // Cuando se carga la APP, cargamos la notas de Firebase
            dispatch( startLoadingNotes() ); 
        })
    }, []);

    return status;
}
