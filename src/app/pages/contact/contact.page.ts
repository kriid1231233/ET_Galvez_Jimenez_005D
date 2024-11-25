import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

    nom:string="";
    email:string="";
    fono:string="";
    descripcion:string="";

  constructor(private menu:MenuController,
    private alertcontroller: AlertController,
    private router: Router) { }

ngOnInit() {
}
  async mensajecontacto(){
    //crea caja de dialogo utilizando el objeto alertcontroller
     const alert = await this.alertcontroller.create({
       header: 'Gracias por ponerte en contacto '+this.email,
       message: 'En breve te llegara un correo',
       buttons: [
         {
           text: 'Confirmar',
           role: 'confirm',
           handler: () => {
             console.log('Datos enviados');
             this.router.navigate(['/iniestudiante']);
             this.limpiar();
              //nos permite navegar hacia un page a partir de un método
           },
         },
       ],
     });
 
     await alert.present();      //activa la ventana del alertcontroller
  }
  limpiar(){
    this.nom="";
    this.email="";
    this.fono="";
    this.descripcion="";
  }
}