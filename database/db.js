const mysql =require('mysql');

const conexion = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'crudnode'
});


conexion.connect((error) => {
  if(error){
    console.error(`Error en la conexion :' ${error}`);
    return;

  }

  console.log(`Conexion Exitosa`);
});

//siempre hay que exportarlo para que funcione 

module.exports=conexion;