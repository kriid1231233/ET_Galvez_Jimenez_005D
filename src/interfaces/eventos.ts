

//petición get, put, delete
export interface Eventos{
    idEvento:number,
    imagen:string,
    nombreEvento:string,
    fecha:string,
    lugar:string,
    descripcion:string,
    coordinadorId:string

}

//petición post
export interface EventosM{
    imagen:string,
    nombreEvento:string,
    fecha:string,
    lugar:string,
    descripcion:string
}