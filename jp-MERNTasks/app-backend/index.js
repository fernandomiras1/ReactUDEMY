const express = require('express');

// crear el servidor
const app = express();

// Puerto de la app
const PORT = process.env.PORT || 4000;

// run app
app.listen(PORT, () => {
    console.log(`EL servidor esta funcionando en el puerto ${PORT}`);
})