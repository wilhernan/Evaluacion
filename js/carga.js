'use strict';

var form = document.getElementById("formulario");

form.addEventListener("submit", function(event){
  event.preventDefault();
  var c = true,
      elementos = this.elements,
      total = elementos.length;
  
  for (var i = 0; i < total; i++){
    if (!elementos[i].value.length){				  
			
	  alert ("Debes de ingresar el " + elementos[i].name);		      
      elementos[i].focus();
      c = false;
      break;
    }
  }
  
  if (c == true){
    this.submit();
  }
}, false);




