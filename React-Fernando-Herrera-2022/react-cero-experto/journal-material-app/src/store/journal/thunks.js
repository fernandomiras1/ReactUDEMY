import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, setActiveNote } from './';
import { deleteNoteById, savingNewNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from './journalSlice';
import { fileUpload, loadNotes } from '../../helpers';


export const startNewNote = () => {
    return async( dispatch, getState ) => {

        // Para que el boton desa desabilitado hasta que se guarda el registro.
        dispatch( savingNewNote() );

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        // Como va a ser la collecion va a quedar algo asi en la bas de datos.
        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes`) );
        // Incertamos la nota
        await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;  

        //! dispatch
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );

    }
}

// Basicamente cuando se carge la APP Traemos las notas de Firebase
export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {
        
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes( uid );
        // Mandamos las notas al store.
        dispatch( setNotes( notes ) );
    }
}

// Guardamos una nota.
export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;
        console.log('noteToFireStore', noteToFireStore);
        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
        await setDoc( docRef, noteToFireStore, { merge: true });

        dispatch( updateNote( note ) );

    }
}

// Subir los Archivos a Cloudinary
export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSaving() );
            
        // await fileUpload( files[0] );
        const fileUploadPromises = [];
        // Subir de de manera simultanea varias imagenes.
        for ( const file of files ) {
            fileUploadPromises.push( fileUpload( file ) )
        }
        // Esperamos que todas las promesas se resuelvan. 
        // Es deicr que que termine de subir todas las imagenes

        const photosUrls = await Promise.all( fileUploadPromises );
        console.log('photosUrls', photosUrls);
        dispatch( setPhotosToActiveNote( photosUrls ));
        
    }
}


export const startDeletingNote = () => {
    return async( dispatch, getState) => {

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await deleteDoc( docRef );

        dispatch( deleteNoteById(note.id) );

    }
}
