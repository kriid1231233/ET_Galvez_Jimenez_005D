import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Opciones{
  icon: string;
  name:string;
  redirecTo:string;
} 


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones: Opciones[]=[
    {
      icon:'person-outline',
      name:'Perfil',
      redirecTo: '/perfil'
    },
    {
      icon:'clipboard-outline',
      name:'Historial de Eventos',
      redirecTo:'/historialdeeventos'

    },
    {
      icon:'ellipsis-horizontal-circle-outline',
      name:'actualizar',
      redirecTo:'/actualizar-evento/:id'

    },
    {
      icon:'"camera-outline',
      name:'Escanear QR',
      redirecTo:'/leeqr'

    },
    {
      icon:'power',
      name:'Cerrar Sesión',
      redirecTo:'/login'

    },

  ]

  constructor(private router: Router) {}

  cerrarsesion(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
  
}
