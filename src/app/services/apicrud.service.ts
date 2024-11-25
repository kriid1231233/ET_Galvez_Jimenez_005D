import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eventos,EventosM } from 'src/interfaces/eventos';
import { environment } from 'src/environments/environment';
import { Alumnos, AlumnosM } from 'src/interfaces/alumnos';
import { misQr } from 'src/interfaces/alumnos';


@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpclient: HttpClient) { }

  getEventos():Observable<Eventos[]>{
    return this.httpclient.get<Eventos[]>(`${environment.apiUrl}/eventos`);

  }
  postEventos(newEventosM : EventosM ):Observable<EventosM[]>{
    return this.httpclient.post<EventosM[]>(`${environment.apiUrl}/eventos`,newEventosM)
  }

  getEventosId(id:number):Observable<Eventos>{
    return this.httpclient.get<Eventos>(`${environment.apiUrl}/eventos/?id=${id}`)
  }
  putEventos(evento:any):Observable<Eventos>{
    return this.httpclient.put<Eventos>(`${environment.apiUrl}/eventos/${evento.id}`,evento)
  }
  obtenerAlumno(): Observable<Alumnos> {
    return this.httpclient.get<Alumnos>(`${environment.apiUrl}/alumnos`);
  }
  getAlumnoRut(rut:string):Observable<AlumnosM>{
    return this.httpclient.get<AlumnosM>(`${environment.apiUrl}/alumnos/?id=${rut}`);
  }
  putAlumno(id: string, Alumnos: AlumnosM): Observable<AlumnosM> {
    return this.httpclient.patch<AlumnosM>(`${environment.apiUrl}/alumnos/${id}`, Alumnos);
  }
  getHistorial(): Observable<misQr[]> {
    return this.httpclient.get<misQr[]>(`${environment.apiUrl}/qr`);
  }
  
}