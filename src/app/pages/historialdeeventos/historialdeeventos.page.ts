import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApicrudService } from 'src/app/services/apicrud.service';
import { EventosM } from 'src/interfaces/eventos';

import { AuthService } from 'src/app/services/auth.service';
import { misQr,QrAll } from 'src/interfaces/alumnos';



@Component({
  selector: 'app-historialdeeventos',
  templateUrl: './historialdeeventos.page.html',
  styleUrls: ['./historialdeeventos.page.scss'],
})
export class HistorialdeeventosPage implements OnInit {

  evento:any;
  qrdata:any;
  rutusuario:string | null;
  email:any;
  idUsuario:any;
  nombreusuario:any;


  qr: misQr [] = [];


  constructor( private apiCrud: ApicrudService,
    private activated : ActivatedRoute,
    private authservice : AuthService,
    private alertcontroller : AlertController,
    private router : Router){
    this.rutusuario = sessionStorage.getItem('rut'); // Recupera el RUT del usuario logueado
   }

   ngOnInit() {
    if (this.rutusuario) {
      this.apiCrud.getHistorial().subscribe((data: misQr[]) => {
        // Filtrar los datos por el rut del usuario logueado
        this.qr = data.filter((evento) => evento.rut === this.rutusuario);
      }, (error) => {
        console.error("Error al cargar el historial de eventos:", error);
      });
    } else {
      console.warn("El rut del usuario no está disponible.");
    }
  }
  
  


  async mensaje() {
    const alert = await this.alertcontroller.create({
      header: "Modificando Datos",
      message: "Se Debe Cerrar Sesion Para los Cambios",
      buttons: [
        {
          text: "OK",
          role: "confirm",
          handler: () => {
            this.router.navigate(["/iniestudiante"]);
          },
        },
      ],
    });

    await alert.present();
  }
}


