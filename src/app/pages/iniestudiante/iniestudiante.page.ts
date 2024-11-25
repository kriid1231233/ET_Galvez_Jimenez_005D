import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Eventos,EventosM } from 'src/interfaces/eventos';
import { ApicrudService } from 'src/app/services/apicrud.service';
import { register } from 'swiper/element/bundle';
register();


@Component({
  selector: 'app-iniestudiante',
  templateUrl: './iniestudiante.page.html',
  styleUrls: ['./iniestudiante.page.scss'],
})
export class IniestudiantePage implements OnInit {

  Event:EventosM[]=[];

  constructor(private menu:MenuController,
    private alertcontroller: AlertController,
    private router: Router,
    private apicrud: ApicrudService) { }

ngOnInit() {
  this.apicrud.getEventos().subscribe((data)=>{
    this.Event=data;
  })
}

images=[
  'assets/foto2.jpg',
  'assets/foto3.jpg',
  'assets/foto4.jpg',
  'assets/foto5.jpg',
  
]


mostrarMenu(){
this.menu.open('first');
}

async mensaje(){
//crea caja de dialogo utilizando el objeto alertcontroller
const alert = await this.alertcontroller.create({
header: '¿Generar Qr?',
buttons: [
{
text: 'Cancelar',
role: 'cancel',
handler: () => {
  console.log('Alerta canceleda');
},
},
{
text: 'OK',
role: 'confirm',
handler: () => {
  console.log('Alerta confirmada');
  this.router.navigate(['/alert']);   //nos permite navegar hacia un page a partir de un método
},
},
],
});

await alert.present();      //activa la ventana del alertcontroller



}
async mensajecard(){
//crea caja de dialogo utilizando el objeto alertcontroller
const alert = await this.alertcontroller.create({
header: '¿Seguro que te deseas registrar?',
buttons: [
{
 text: 'Cancelar',
 role: 'cancel',
 handler: () => {
   console.log('Alerta canceleda');
 },
},
{
 text: 'OK',
 role: 'confirm',
 handler: () => {
   console.log('Alerta confirmada');
   this.router.navigate(['/card']);   //nos permite navegar hacia un page a partir de un método
 },
},
],
});

await alert.present();      //activa la ventana del alertcontroller

  }

  buscarEvento(Observable:any){
    this.router.navigate(['/detalle-evento'],
      {queryParams:{evento: JSON.stringify(Observable)}}
    )
  }


}

