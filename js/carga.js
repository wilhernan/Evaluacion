'use strict';

const inputUser = document.querySelector('#user');
const inputContrasena = document.querySelector('#contrasena');
const inputTipo = document.querySelector('#textmenu');
var botonIngresar = document.querySelector('#btn');

botonIngresar.addEventListener('click', function(){
  cargar_datos();
});


function cargar_datos(){
    let username = inputUser.value;
    let password = inputContrasena.value;
    let type = inputTipo.value;
  
  validar_login(username, password, type);
}


