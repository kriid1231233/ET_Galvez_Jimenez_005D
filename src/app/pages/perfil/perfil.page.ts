import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApicrudService } from "src/app/services/apicrud.service"; 
import { AlumnosM } from "src/interfaces/alumnos";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.page.html",
  styleUrls: ["./perfil.page.scss"],
})
export class PerfilPage implements OnInit {
  nombre: string = '';
  email: string = '';
  password: string = '';
  id: any;
  imagen:string='';

  Alumnos: AlumnosM = {
    nombre: "",
    email: "",
    password:"",
    imagen: ""
  };

  constructor(
    private apicrud: ApicrudService,
    private alertcontroller: AlertController,
    private router: Router,
  ) {}

  ngOnInit() {
    // Asigna los valores desde sessionStorage solo para la carga inicial
    this.nombre = sessionStorage.getItem("nombre") || '';
    this.email = sessionStorage.getItem("email") || '';
    this.password = sessionStorage.getItem("password") || '';
    this.id = sessionStorage.getItem("id");
    this.imagen = sessionStorage.getItem("imagen") || 'assets/gato.png';
    console.log('URL de la imagen:', this.imagen)
    console.log('id del estudiante:', this.id)


    
    // Actualiza el objeto Alumnos con los valores recuperados
    this.Alumnos = {
      nombre: this.nombre,
      email: this.email,
      password: this.password,
      imagen: this.imagen
    };
  }

  actualizarAlumno() {
    // Actualiza la propiedad Alumnos con los valores de los inputs
    this.Alumnos.nombre = this.nombre;
    this.Alumnos.email = this.email;
    this.Alumnos.password = this.password;
    

    if (this.imagen) {
      this.Alumnos.imagen = this.imagen; 
    }
  
    this.apicrud.putAlumno(this.id, this.Alumnos).subscribe(() => {
      this.mensaje();
    });
  }
  

  onFileSelected(event: Event) {
    // Verifica que event.target sea un HTMLInputElement
    const target = event.target as HTMLInputElement;
    
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagen = e.target.result; // Asigna la URL de datos de la imagen seleccionada
        this.Alumnos.imagen = this.imagen; // Asegúrate de que Alumnos.imagen tenga el valor correcto
      };
      
      reader.readAsDataURL(file); // Lee el archivo como una URL de datos
    } else {
      console.warn("No se seleccionó ningún archivo.");
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
