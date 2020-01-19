import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    // define la ubicacion donde va a estar el modal
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

// le agregamos estolos de apariencia al modal
const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {

    // Configuracion del modal de Material-ui
    const [ modalStyle ] = useState(getModalStyle);
    // inicialemnte va a estar cerrado el modal
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    // extraer valores del context
    const { informacion, guardarIdReceta, guardarReceta } = useContext(ModalContext);
    // btn: para abrir el modal
    const handleOpen = () => {
        setOpen(true);
    };
    // btn: para cerrar el modal
    const handleClose = () => {
        setOpen(false);
    };

    // Muestra y formatea los ingredientes.
    const mostrarIngredientes = informacion => {
        let ingredietes = [];
        // termina en 15
        for(let i = 1; i< 16; i++) {
            if ( informacion[`strIngredient${i}`] ) {
                ingredietes.push(
                    <li>{ informacion[`strIngredient${i}`] } {informacion[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredietes;
    }

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">
                    {receta.strDrink}
                </h2>
                <img className="card-img-top" src={receta.strDrinkThumb} alt={`imagen de ${receta.strDrink}`}/>
                <div className="card-body">
                    <button
                        type="button"
                        onClick={() => {
                            guardarIdReceta(receta.idDrink);
                            handleOpen();
                        }}
                        className="btn btn-block btn-primary">
                        Ver Receta
                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            guardarIdReceta(null);
                            guardarReceta({});
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{informacion.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>{informacion.strInstructions}</p>
                            <img className="img-fluid my-4"
                                src={informacion.strDrinkThumb} 
                                alt="fer"
                            />
                            <h3>Ingredientes y cantidades</h3>
                            <ul>
                                { mostrarIngredientes(informacion) }
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
 
export default Receta;