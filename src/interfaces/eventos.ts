//petición get, put, delete
export interface Evento {
	id: string
	coordinadorId: string
	imagen: string
	nombreEvento: string
	fecha: string
	lugar: string
	descripcion: string
}

//petición post
export interface EventosM {
	id?: string
	imagen: string
	nombreEvento: string
	fecha: string
	lugar: string
	descripcion: string
}
