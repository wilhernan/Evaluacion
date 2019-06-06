module.exports.save = (user) =>{
    const dbo = require('../Test-Integration/connection');
    return new Promise((exi,error) => {
        console.log('Registrando Usuaruio...');
        dbo.conexion.query(
            'INSERT INTO persona (nombre, apellido, correo) VALUES ("Wilfredo", "Hernández", "wilhernan777@gmail.com")',
            [user.nombre, user.apellido, user.correo],
            (err,resp) => {
                if(resp){
                    console.log('Usuario Registrado con Éxito' + resp);
                    exi(resp);
                }else{
                    console.log('Error al Registrar el Usuario' + err);
                    error(err);
                }
        });  
        dbo.conexion.end();      
    });
}