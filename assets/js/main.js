import Usuario from './user.model.js';
import { request, apiUrl } from './service.js';

$(document).ready(() => {
    $('#mostrar_usuarios').click(() => {
        get_users();
    });
    $('#eliminar_filtros').click(() => {
        reset_user_filters();
    });
});

function get_users(){
   
    request('GET', `${apiUrl}/users`)
        .then(usersData => {

        const filterObj = {
            name: $('#filtro_usuarios_name').val() || null,
            username: $('#filtro_usuarios_username').val() || null,
            email: $('#filtro_usuarios_email').val() || null,
            phone: $('#filtro_usuarios_phone').val() || null
        };
        let noFiltros = false;

        if (!filterObj.name && !filterObj.email && !filterObj.username && !filterObj.phone) {
            noFiltros = true;
        }

        $('#listado_usuarios').empty();
        for (const userData of usersData) {
            const usuario = new Usuario(userData);
            
            const usuarioFiltrado = usuario.filtrar_usuario(filterObj);
            if (noFiltros || usuarioFiltrado) {
                mostrar_datos(usuario);
            }
        }

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
        <p class="mb-1">${user.phone}</p>
        <p class="mb-1">${user.email}</p>
        <a href="user.html?id=${user.id}">
            <button class="button btn btn-dark">Editar</button>
        </a>
    </div>`;

    $('#listado_usuarios').append(vista_mostrar_datos);
}

function reset_user_filters(){
    $('#filtro_usuarios_name').val('');
    $('#filtro_usuarios_username').val('');
    $('#filtro_usuarios_email').val('');
    $('#filtro_usuarios_phone').val('');
    $('#listado_usuarios').empty();
}
