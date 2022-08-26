import Usuario from './user.model.js';
import { request, apiUrl } from './service.js';

$(document).ready(() => {
    
    const id_usuario = recuperar_id_de_url();
    if ( id_usuario ){
        mostrar_usuario(id_usuario);

        $('#btn_editar_usuario').click(() => {
            const nuevo_email = $("#editar_email").val();
            const nuevo_telefono = $("#editar_phone").val();
            editar_usuario(id_usuario, nuevo_email, nuevo_telefono);
        });
    } else {
        alert("No ha indicado un usuario");
        volver_index();
    }

});

function mostrar_usuario(id){
    
    request('GET', `${apiUrl}/users/${id}`)
        .then(datoUsuario => {

        const usuario = new Usuario(datoUsuario);
        mostrar_datos(usuario);

    }).catch((error)=> {
        console.error(error);
        alert('Error en la petición');
    });

}

function mostrar_datos (user){

    const vista_mostrar_datos = `<div class="list-group-item border mb-3">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${user.name}</h5>
            <small>(${user.username})</small>
        </div>
        <input type="tel" id="editar_phone" class="form-control mb-1" value="${user.phone}" />
        <input type="email" id="editar_email" class="form-control mb-1" value="${user.email}"/>
    </div>
    `;
    
    $('#editar_usuario').append(vista_mostrar_datos);
}

function editar_usuario(id, nuevo_email, nuevo_telefono){
    
    request('PUT', `${apiUrl}/users/${id}`, JSON.stringify({
        email: nuevo_email,
        phone: nuevo_telefono
    })).then(() => {

        volver_index();

    }).catch((error)=> {
        console.error(error);
        alert('Error en la petición');
    });

}

function recuperar_id_de_url(){    
    const parametrosBusqueda = new URLSearchParams(window.location.search);
    const id_usuario = parametrosBusqueda?.get('id');
    return id_usuario;
}

function volver_index(){
    location.href = 'index.html';
}