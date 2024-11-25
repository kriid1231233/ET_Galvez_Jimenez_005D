import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Alumnos } from 'src/interfaces/alumnos';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.page.html',
  styleUrls: ['./crearusuario.page.scss'],
})

export class crearUsuario implements OnInit {

  registroForm: FormGroup;


  nuevoAlumno: Alumnos={
    idUsuario:"",
    nombre:"",
    rut:"",
    password:"",
    imagen:"",
    isactive:false,
    email:"",
    
    
  }


  userdata: any;



  constructor(private authservice: AuthService, 
            private alertcontroller: AlertController,
            private router: Router,
            private fBuilder: FormBuilder) {
              this.registroForm = this.fBuilder.group({ 
              'nombre' : new FormControl ("", [Validators.required, Validators.minLength(3)]),
              'rut' : new FormControl ("", [Validators.required]),
              'password': new FormControl("", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
              'email': new FormControl ("", [Validators.required, Validators.email]),
              
            })
     }


  ngOnInit() {
  }
crearUsuario(){
    if (this.registroForm.valid){
      this.authservice.GetAlumnoByrut(this.registroForm.value.nombre).subscribe(resp=>{
        this.userdata = resp; 
        if(this.userdata.length>0){
           this.registroForm.reset();
          this.errorDuplicidad();
        }
        else{
          this.nuevoAlumno.nombre = this.registroForm.value.nombre;
          this.nuevoAlumno.rut = this.registroForm.value.rut;
          this.nuevoAlumno.email = this.registroForm.value.email;
          this.nuevoAlumno.password = this.registroForm.value.password;
          this.nuevoAlumno.imagen = this.registroForm.value.imagen;
          this.nuevoAlumno.isactive=true;
          this.authservice.PostAlumno(this.nuevoAlumno).subscribe();
          this.registroForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/login');
        }
      })
    }
  }


  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Usuario creado',
      message: 'Bienvenid@! ' + this.nuevoAlumno.nombre,
      buttons: ['OK']
    });
    alerta.present();
  }


  async errorDuplicidad(){
    const alerta = await this.alertcontroller.create({
      header: 'Error..',
      message: 'Usted '+ this.nuevoAlumno.nombre + ' ya esta registrado:D',
      buttons: ['OK']
    });
    alerta.present();
  }


}