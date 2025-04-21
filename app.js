
//primer paso -> definimos express
const express = require('express');
const app = express();

//motor de plantillas
app.set('view engine','ejs');

//CINFIGURACION DE CAPTURA DE DATOS
app.use(express.urlencoded({extended: false}));
app.use(express(express.json));

//enrutador
app.use('/',require('./router'));

//Segundo -> app creamos un servidor 
app.listen(5000,() => {
  console.log("Servidor Ejecutandose en http://localhost:5000")
});