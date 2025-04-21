
const conexion=require('../database/db');
exports.save =(req,res)=>{
  //Acceder a los datos enviados(vista)
  const tipo = req.body.tipo;
  const marca = req.body.marca;
  const color = req.body.color;

  //NOTA: SE DEBE ESPECIFICAR COMO CAPTURAR LOS DATOS DE LOS <FORM></FORM> APP.JS
  //evidencia de captura de datos
  //console.log(tipo,marca,color);

  conexion.query(`INSERT INTO vehiculos SET ?`,{
    tipo:tipo,
    marca:marca,
    color:color
  },(error,results  ) =>
  {
  if(error){
    console.log(error);

  }else{
    //redireccionar
 console.log("Grabado correctamente")
 res.redirect('/')
  }
});
}