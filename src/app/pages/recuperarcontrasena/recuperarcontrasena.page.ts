import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Importa AlertController
import { Router } from '@angular/router'; // Importa Router para la navegación

@Component({
  selector: 'app-recuperarcontrasena',
  templateUrl: './recuperarcontrasena.page.html',
  styleUrls: ['./recuperarcontrasena.page.scss'],
})
export class RecuperarcontrasenaPage implements OnInit {
  email: string = ''; // Inicializa la propiedad
  newPassword: string = ''; // Inicializa la propiedad
  confirmPassword: string = ''; // Inicializa la propiedad
  securityAnswer: string = ''; // Inicializa la propiedad

  constructor(private alertController: AlertController, private router: Router) { } // Inyecta AlertController y Router

  ngOnInit() {
    // Aquí puedes inicializar cualquier dato o llamar a servicios necesarios al cargar la página
  }

  // Método personalizado para restablecer la contraseña con una alerta
  async resetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      // Muestra un mensaje de error si las contraseñas no coinciden
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden. Por favor, inténtalo de nuevo.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // Alerta personalizada cuando las contraseñas coinciden
    const alert = await this.alertController.create({
      header: 'Contraseña restablecida',
      message: 'Tu contraseña ha sido restablecida con éxito. Pronto recibirás un correo de confirmación.',
      buttons: [
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {
            console.log('Contraseña restablecida y datos enviados');
            this.router.navigate(['/login']); // Navega a la página de inicio
            this.limpiar(); // Llama al método para limpiar los campos
          },
        },
      ],
    });

    await alert.present(); // Presenta la alerta
  }

  // Método para limpiar los campos del formulario
  limpiar() {
    this.email = '';
    this.newPassword = '';
    this.confirmPassword = '';
    this.securityAnswer = '';
  }
}
