import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

// Traemos las Notas de Firebase.
export const loadNotes = async( uid = '') => {
    if ( !uid ) throw new Error('El UID del usuario no existe');

    // Buscamos todas la notas ( colecciones ) que tiene el Usuario Logeado.
    const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes` );
    const docs = await getDocs(collectionRef);

    const notes = [];
    docs.forEach( doc => {
        notes.push({ id: doc.id, ...doc.data() });
    });
    
    return notes;
}
