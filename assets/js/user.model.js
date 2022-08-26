function filtra_propiedad(prop, usuario, filtro) {
    return filtro[prop] && usuario[prop].toLowerCase().includes(filtro[prop].toLowerCase());
}

export default class Usuario {
 
    constructor({id, name, username, phone, email}){
        this.id = id;
        this.name = name;
        this.username = username;
        this.phone = phone;
        this.email = email;
    }

    filtrar_usuario(filtro){

        if (
            filtra_propiedad('id', this, filtro) ||
            filtra_propiedad('name', this, filtro) ||
            filtra_propiedad('username', this, filtro) ||
            filtra_propiedad('phone', this, filtro) ||
            filtra_propiedad('email', this, filtro)
        ) {
            return true
        }

        return false;

    }
   
};