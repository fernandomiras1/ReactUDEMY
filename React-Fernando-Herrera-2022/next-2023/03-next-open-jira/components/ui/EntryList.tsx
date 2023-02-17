import { FC, useContext, useMemo, DragEvent } from 'react';
import { List, Paper } from '@mui/material';

import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';

import styles from './EntryList.module.css';

interface Props {
    status: EntryStatus;
}


export const EntryList:FC<Props> = ({ status }) => {

    const { entries, updateEntry } = useContext( EntriesContext );
    const { isDragging, endDragging } = useContext( UIContext );

    const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status ), [ entries ]);

    const allowDrop = ( event: DragEvent<HTMLDivElement> ) => {
        event.preventDefault();
    }

    const onDropEntry = ( event: DragEvent<HTMLDivElement> ) => {
        // Recuperamos el ID
        const id = event.dataTransfer.getData('text');
         // (!): NO puede ser posible que sea un undefinded
        const entry = entries.find( e => e._id === id )!;
        // Cambiamos el nuevo status
        entry.status = status;
        updateEntry( entry );
        endDragging();
    }

      
    return (
        //   TODO: aquí haremos drop
        <div
            onDrop={ onDropEntry }
            onDragOver={ allowDrop } // Le permitimos dejar caer algo deltro de este div
            className={ isDragging ? styles.dragging : '' }
        >
            <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'auto', backgroundColor: 'transparent', padding: '3px 5px'  }}>

                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}> 
                    {
                        entriesByStatus.map( entry => (
                            <EntryCard key={ entry._id } entry={ entry } />
                        ))
                    }        
                </List>

            </Paper>
        </div>
    )
};
