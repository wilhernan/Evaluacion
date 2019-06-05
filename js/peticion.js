'use strict';



formulario.addEventListener('submit', function(e){
	e.preventDefault();
	
	var formulario = document.getElementById("formulario");
	
	var datos = new FormData(formulario);
	let username = datos.get('username');
	let password = datos.get('password');
	let type = datos.get('tipo');

	validar_login(username, password, type);
	

function validar_login (username, password, type){   

   $.ajax({
      url : 'https://prueba-admision-web.herokuapp.com/session',
      type : 'post', 
      contentType : 'application/x-www-form-urlencoded',       
      dataType : 'json', 
      async : true,       
      data :{
          "username" : username,
          "password" : password,
          "type" : type
      }
    })

     .done(function(datos){
            
        let route2 = 'https://prueba-admision-web.herokuapp.com/data';
        let data2 = datos.cid;
        data2 = 'cid=' + data2;
        route2 = (route2 + '?' + data2);     
        
        timeline(route2);
      })

      .fail(function(datos,jqXHR,){
 
        console.log("Todo Salio Mal");
        console.log(datos.cid,datos.status);
        alert(datos.cid,datos.status);
   
     });        

	};

	function timeline(route2){  

	
	  $.ajax({
		url : route2,
		type : 'get',                  
		dataType : 'json' 
	  })
		
	  .done(function(datos){
		  
		var dat = " ";
		for (var c = 0; c < datos.length; c++) {
                    var infodat = " * " + datos[c].id;
					infodat += " - " + datos[c].title;
                    infodat += " - " + datos[c].url;
                    infodat += " - " + datos[c].thumbnailUrl + " ";
                    dat += infodat;
			}
			dat += " ";
		  //var dat = JSON.stringify (datos);
	alert =(dat);
			localStorage.setItem("storageName",dat);		
	
			window.location = "../src/TimeLine.html"

	  })  
	  .fail(function(datos){
		console.log("Todo Salio Otra vez Mal");
		console.log(datos);
		alert(datos);
	    $("#TimeLine").html(dat);
	  });
	  
	};
			
});




