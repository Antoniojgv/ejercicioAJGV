
function get_users(){
   
    $.ajax({
        type: 'GET',
        url: "https://jsonplaceholder.typicode.com/users",
        dataType: 'json',
        success: function (data) {

            let filtro_usuarios_name = $('#filtro_usuarios_name').val();
            let filtro_usuarios_username = $('#filtro_usuarios_username').val();
            let filtro_usuarios_email = $('#filtro_usuarios_email').val();
            let filtro_usuarios_phone = $('#filtro_usuarios_phone').val();
            let listado_usuarios = $('#listado_usuarios');

            listado_usuarios.empty();
            $.each(data, function (index, val) {

                var user_item = new usuario({ 
                    id : val.id,
                    name : val.name, 
                    username : val.username, 
                    email : val.email, 
                    phone: val.phone 
                });
                let filtrado = user_item.filtrar_usuario({name : filtro_usuarios_name, username : filtro_usuarios_username, email : filtro_usuarios_email, phone : filtro_usuarios_phone});

                if( filtrado ){

                    listado_usuarios.append(user_item.mostrar_datos());
                    listado_usuarios.append();

                }

            });
        }
    });

}

function show_user(id){

    $.ajax({
        type: 'GET',
        url: "https://jsonplaceholder.typicode.com/users/" + id,
        dataType: 'json',
        success: function (data) {

            var user_item = new usuario({ 
                id : data.id,
                name : data.name, 
                username : data.username, 
                email : data.email, 
                phone: data.phone 
            });
 
            let editar_usuario = $('#editar_usuario');

            editar_usuario.append(user_item.editar_datos());

        }
    });

}

function edit_user(id, new_email, new_phone){

    $.ajax({
        type: 'PUT',
        url: "https://jsonplaceholder.typicode.com/users/" + id,
        dataType: 'json',
        data: JSON.stringify({
            email: new_email,
            phone: new_phone
        }),
        success: function (data) {

            //console.log(data);
            return_index();

        }
    });

}

function reset_user_filters(){
    $('#filtro_usuarios_name').val('');
    $('#filtro_usuarios_username').val('');
    $('#filtro_usuarios_email').val('');
    $('#filtro_usuarios_phone').val('');
    $('#listado_usuarios').empty();
}

function get_user_id_from_url(){
    
    let searchParams = new URLSearchParams(window.location.search);
    let user_id = searchParams.get('id');
    return user_id ? user_id : false;

}

function return_index(){
    location.href='index.html';
}