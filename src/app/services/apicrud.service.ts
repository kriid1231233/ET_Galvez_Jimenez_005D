import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Evento, EventosM } from 'src/interfaces/eventos'
import { environment } from 'src/environments/environment'
import { Alumnos, AlumnosM } from 'src/interfaces/alumnos'
import { misQr } from 'src/interfaces/alumnos'

@Injectable({
	providedIn: 'root',
})
export class ApicrudService {
	constructor(private httpclient: HttpClient) {}

	getEventos(): Observable<Evento[]> {
		return this.httpclient.get<Evento[]>(
			`${environment.apiUrl}/eventos`
		)
	}
	postEventos(newEventosM: EventosM): Observable<Evento[]> {
		return this.httpclient.post<Evento[]>(
			`${environment.apiUrl}/eventos`,
			newEventosM
		)
	}
	getEventosId(id: number): Observable<Evento> {
		return this.httpclient.get<Evento>(
			`${environment.apiUrl}/eventos/?id=${id}`
		)
	}
	putEventos(event: EventosM): Observable<Evento> {
		return this.httpclient.patch<Evento>(
			`${environment.apiUrl}/eventos/${event.id}`,
			event
		)
	}
	deleteEvento(event: Evento) {
		return this.httpclient.delete(
			`${environment.apiUrl}/eventos/${event.id}`
		)
	}

	obtenerAlumno(): Observable<Alumnos> {
		return this.httpclient.get<Alumnos>(
			`${environment.apiUrl}/alumnos`
		)
	}

	getAlumnoRut(rut: string): Observable<AlumnosM> {
		return this.httpclient.get<AlumnosM>(
			`${environment.apiUrl}/alumnos/?id=${rut}`
		)
	}

	putAlumno(id: string, Alumnos: AlumnosM): Observable<AlumnosM> {
		return this.httpclient.patch<AlumnosM>(
			`${environment.apiUrl}/alumnos/${id}`,
			Alumnos
		)
	}

	getHistorial(rutusuario: string): Observable<misQr[]> {
		// Realizamos la solicitud GET incluyendo el parámetro rutusuario directamente en la URL
		return this.httpclient.get<misQr[]>(
			`${environment.apiUrl}/qr/?rutusuario=${rutusuario}`
		)
	}
	getTodosLosEventos(): Observable<misQr[]> {
		return this.httpclient.get<misQr[]>(`${environment.apiUrl}/qr`);
	  }
}
