import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApicrudService } from 'src/app/services/apicrud.service';
import { EventosM } from 'src/interfaces/eventos';

import { AuthService } from 'src/app/services/auth.service';
import { misQr,QrAll } from 'src/interfaces/alumnos';




@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.page.html',
  styleUrls: ['./detalle-evento.page.scss'],
})
export class DetalleEventoPage implements OnInit {

  evento:any;

  qrdata:any;
  rut:any;
  email:any;
  idUsuario:any;
  nombre:any;

  newqr: misQr={
    nombreusuario:'',
    emailusuario:'',
    rut:'',
    nombreEvento:'',
    fecha:'',
    lugar:''
  }



  constructor( private apiCrud: ApicrudService,
               private activated : ActivatedRoute,
               private authservice : AuthService,
               private router : Router){
                // Obtener datos pasados por parámetros
                this.activated.queryParams.subscribe(param => {
                  this.evento = JSON.parse(param['evento']);
                });
            
                // Recuperar datos del sessionStorage
                this.rut = sessionStorage.getItem('rut');
                this.email = sessionStorage.getItem('email');
                this.nombre = sessionStorage.getItem('nombre');  // Asegúrate de que 'nombre' esté en sessionStorage 
              }
  ngOnInit() {
  }

  generarQr(){
    this.qrdata='';
    this.qrdata =  this.evento.nombreEvento  +  this.evento.lugar +  this.evento.fecha + this.rut.slice(0, 8) + this.email ;
    this.newqr.nombreusuario = this.nombre;
    this.newqr.emailusuario = this.email;
    this.newqr.rut = this.rut;
    this.newqr.nombreEvento = this.evento.nombreEvento;
    this.newqr.fecha = this.evento.fecha;
    this.newqr.lugar = this.evento.lugar;
    this.authservice.PostQr(this.newqr).subscribe();
    console.log('Qr Almacenado');
    console.log(this.qrdata);
  }

  volver(){
    this.router.navigate(["/iniestudiante"])
    this.limpiarQr();
  }
  limpiarQr() {
    this.qrdata = ''; // Limpia el contenido de qrdata
    console.log('qrdata ha sido limpiado:', this.qrdata);
}
}
