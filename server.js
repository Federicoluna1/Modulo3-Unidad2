var express = require ('express');
var app = express ();

app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded());

app.post('/respuesta', function(req, res) {
    var nombre = req.body.nombre; 
    var apellido = req.body.apellido;  
    var edad = req.body.edad; 
    var telefono = req.body.telefono; 
    var nacionalidad = req.body.nacionalidad; 
    var paisResidencia = req.body.paisResidencia;  
    var html=  `<html><head><tittle>Hola</tittle></head><body><h1>Hola ${nombre} ${apellido}!</h1></br><p>Nos dijo que tiene una edad de ${edad}</p></br><p>y que tu numero telefonico es ${telefono}</p></br><p>Usted nacio en ${nacionalidad}</p></br><p>y actualmente vive en ${paisResidencia}</p><a href='/'>Volver a completar el formulario</a></body></html> ` 
    res.send(html);
})

app.listen(3000, function() {
    console.log("Express iniciado en el puerto 3000");
});