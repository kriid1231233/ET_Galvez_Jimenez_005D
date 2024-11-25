

export interface Alumnos{
    idUsuario:string;
    rut:string;
    nombre:string;
    imagen: string;
    isactive:boolean;
    password:string;
    email: string;

}

//petición post
export interface AlumnosM{
    nombre:string;
    password:string;
    email: string;
    imagen:string;
    
}


//post
export interface misQr{
    nombreusuario: string;
    emailusuario: string;
    rutusuario: string;
    nombreEvento:string;
    fechaevento:string;
    lugarevento:string;
}

//get, put, delete
export interface QrAll{
    id:string;
    nombreusuario: string;
    emailusuario: string;
    rutusuario: string;
    nombreEvento:string;
    fechaevento:string;
    lugarevento:string;
}