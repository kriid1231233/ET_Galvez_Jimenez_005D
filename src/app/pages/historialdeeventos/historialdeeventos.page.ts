import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApicrudService } from 'src/app/services/apicrud.service';
import { misQr } from 'src/interfaces/alumnos';

@Component({
  selector: 'app-historialdeeventos',
  templateUrl: './historialdeeventos.page.html',
  styleUrls: ['./historialdeeventos.page.scss'],
})
export class HistorialdeeventosPage implements OnInit {
  evento: any;
  qrdata: any;
  rut: any;
  email: any;
  idUsuario: any;
  nombre: any;

  newqr: misQr = {
    nombreusuario: '',
    emailusuario: '',
    rutusuario: '',
    nombreEvento: '',
    fechaevento: '',
    lugarevento: ''
  };

  qr: misQr[] = [];

  constructor(
    private apiCrud: ApicrudService,
    private activated: ActivatedRoute,
    private alertcontroller: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarTodosLosEventos();
  }

  cargarTodosLosEventos() {
    this.apiCrud.getTodosLosEventos().subscribe(
      (data: misQr[]) => {
        this.qr = data; // Asignar todos los eventos a la variable qr
      },
      (error) => {
        console.error('Error al cargar todos los eventos:', error);
      }
    );
  }

  async mensaje() {
    const alert = await this.alertcontroller.create({
      header: 'Modificando Datos',
      message: 'Se Debe Cerrar Sesión Para los Cambios',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/iniestudiante']);
          },
        },
      ],
    });

    await alert.present();
  }
}
