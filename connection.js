const sql = require('mysql');
const properties = require('properties-reader');
var prop = properties(__dirname + '/database.properties');

var conexion = sql.createConnection({
    host: prop.get('Host'),
    port: prop.get('Port'),
    user: prop.get('Username'),
    password: prop.get('Password'),
    database: prop.get('dbo')
});

conexion.connect(function (error){
    if (error) {
        console.log('Error Estableciendo Conexion: ' + error);
        throw error;
    }else{
        console.log ('Conexión Establecida !!!');
    }
})

module.exports.conexion = conexion;