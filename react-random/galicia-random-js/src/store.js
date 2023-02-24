import { createStore, applyMiddleware, compose } from 'redux';
// te permite crear funciones asicronas
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk), 
        // Si tenemos la extencion de Crhome Redux.
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                window.__REDUX_DEVTOOLS_EXTENSION__(): f => f
    )
);

export default store;