class usuario{
 
    constructor(options){
        this.id = options.id;
        this.name = options.name;
        this.username = options.username;
        this.phone = options.phone;
        this.email = options.email;
    }

    filtrar_usuario(options){

        if( options.name ){
            if( this.name.toLowerCase().indexOf(options.name.toLowerCase()) == -1 ) return false;
        }
        if( options.username ){
            if( this.username.toLowerCase().indexOf(options.username.toLowerCase()) == -1 ) return false;
        }
        if( options.phone ){
            if( this.phone.toLowerCase().indexOf(options.phone.toLowerCase()) == -1 ) return false;
        }
        if( options.email ){
            if( this.email.toLowerCase().indexOf(options.email.toLowerCase()) == -1 ) return false;
        }

        return true;

    }

    mostrar_datos(){

        let vista_mostrar_datos = "";

        vista_mostrar_datos += "<div class=\"list-group-item border mb-3\">";
            vista_mostrar_datos += "<div class=\"d-flex w-100 justify-content-between\">";
                vista_mostrar_datos += "<h5 class=\"mb-1\">" + this.name + "</h5>";
                vista_mostrar_datos += "<small>(" + this.username + ")</small>";
            vista_mostrar_datos += "</div>";
            vista_mostrar_datos += "<p class=\"mb-1\">" + this.phone + "</p>";
            vista_mostrar_datos += "<p class=\"mb-1\">" + this.email +"</p>";
            vista_mostrar_datos += "<a href=\"user.html?id=" + this.id + "\">";
                vista_mostrar_datos += "<button class=\"button btn btn-dark\">Editar</button>";
            vista_mostrar_datos += "</a>";
        vista_mostrar_datos += "</div>";
        
        return vista_mostrar_datos;
    }

    editar_datos(){

        let vista_editar_datos = "";
        
        vista_editar_datos += "<div class=\"list-group-item border mb-3\">";
            vista_editar_datos += "<div class=\"d-flex w-100 justify-content-between\">";
                vista_editar_datos += "<h5 class=\"mb-1\">" + this.name + "</h5>";
                vista_editar_datos += "<small>(" + this.username + ")</small>";
            vista_editar_datos += "</div>";
            vista_editar_datos += "<input type=\"tel\" id=\"editar_phone\" class=\"form-control mb-1\" value=\"" + this.phone + "\" />";
            vista_editar_datos += "<input type=\"email\" id=\"editar_email\" class=\"form-control mb-1\" value=\"" + this.email +"\" />";
        vista_editar_datos += "</div>";
        
        return vista_editar_datos;

    }
   
};