import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoAdd } from './08-useReducer/TodoAdd';
import { MainApp } from './09-useContext/MainApp';


import { HooksApp } from './HooksApp';




import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <HooksApp />
  <MainApp />
  // </React.StrictMode>
)
