const req = require('request');
const sha1 = require('sha1');

module.exports.findAll = () => {
    return new Promise ((exi,err) => {
        var route = 'http://jsonplaceholder.typicode.com/albums';
        console.log('estableciendo conexion con: ' + route);
        req({
            url: route,
            json: true,
        }, function (data, error)  {
            if(data){
                console.log('Conexion Establecida');
                let array = [];                
                for(i=0; i < data.length; i++){
                    var obj = new Object();

                    obj.UserId = data[i].userId;
                    obj.Id = data[i].id;
                    obj.Tittle = data[i].title;
                    obj.Hash = sha1(data[i].title);

                    array.push(obj);
                } 
                exi(array);

            }else{
                console.log('Error de Conexión: ' + error)
                err(error);
            }          
            
        });
    });
}