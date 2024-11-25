import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  event = {
    tipo: '',
    lugar: '',
    carrera: ''
  };

  // Variables para manejar el estado del toast
  showToast = false;
  toastMessage = '';

  // Inyecta Router en el constructor
  constructor(private router: Router) {}

  // Función que maneja el envío del formulario
  registerEvent() {
    if (this.event.tipo && this.event.lugar && this.event.carrera) {
      // Si todos los campos son válidos, muestra un mensaje de éxito
      this.showToast = true;
      this.toastMessage = 'Evento registrado con éxito.';
      
      // Redirige a /iniestudiante
      this.router.navigate(['/iniestudiante']);
      
      // Aquí puedes agregar la lógica para manejar el evento, como enviar los datos a un servidor
      console.log('Formulario válido, datos:', this.event);
    } else {
      // Si algún campo es inválido, muestra un mensaje de error
      this.toastMessage = 'Por favor, complete todos los campos requeridos.';
      this.showToast = true;
      console.log('Formulario inválido');
    }
  }

  ngOnInit() {
  }

}
