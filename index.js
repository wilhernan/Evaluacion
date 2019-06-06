const express = require('express');
const app = express();
const http = require('http');
const albunes = require('../Test-Integration/albunes');
const dbo = require('../Test-Integration/dbo');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/admision', function (req, res) {
    albunes.findAll()
        .then((result) =>{
            console.log(result);
            res.json(result);
            
        }).catch((result)=>{
            console.log(result);
            res.status(404).json({ code: 404, title: 'No Disponible'});
        });
});

app.post('/admision', function (req, res)  {
    var user = new Object();
    user.nombre = req.body.nombre;
    user.apellido = req.body.apellido;
    user.correo = req.body.correo;

    dbo.save(user)
        .then((resp) => {   
            console.log(resp);         
            res.json(resp);
        }).catch((resp) => {            
            res.status(500).json({ code: 500, message: 'Error Interno del Servidor' });
        });
});


http.createServer(app).listen(3000, () => {
    console.log('Servidor initialized - port:' + 3000);
});