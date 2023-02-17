import { FC, useEffect, useReducer } from 'react';

// import { entriesApi } from '../../apis';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';


export interface EntriesState {
    entries: Entry[];
}


const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Eiusmod adipisicing labore irure cillum duis.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'Aliquip proident aute minim veniam ea non non.',
            status: 'in-progress',
            createdAt: Date.now() -  10000
        },
        {
            _id: uuidv4(),
            description: 'Nulla amet ullamco occaecat cillum nostrud mollit nisi nostrud ut excepteur duis enim enim.',
            status: 'finished',
            createdAt: Date.now() - 5000
        },

    ],
}


export const EntriesProvider:FC = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer , Entries_INITIAL_STATE );

    const addNewEntry = async( description: string ) => {

        // const { data } = await entriesApi.post<Entry>('/entries', { description });
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }
        dispatch({ type: '[Entry] Add-Entry', payload: newEntry });

    }

    const updateEntry = async( entry: Entry ) => {
        try {
            dispatch({ type: '[Entry] Entry-Updated', payload: entry });

        } catch (error) {
            console.log({ error });
        }
    }
    // const updateEntry = async( { _id, description, status }: Entry ) => {
    //     try {
    //         const { data } = await entriesApi.put<Entry>(`/entries/${ _id }`, { description, status });
    //         dispatch({ type: '[Entry] Entry-Updated', payload: data });

    //     } catch (error) {
    //         console.log({ error });
    //     }
    // }

    // const refreshEntries = async() => {
    //     const { data } = await entriesApi.get<Entry[]>('/entries');
    //     dispatch({ type: '[Entry] Refresh-Data', payload: data });
    // }

    // useEffect(() => {
    //   refreshEntries();
    // }, []);
    


    return (
        <EntriesContext.Provider value={{
            ...state,

            // Methods
            addNewEntry,
            updateEntry,
        }}>
            { children }
        </EntriesContext.Provider>
    )
};