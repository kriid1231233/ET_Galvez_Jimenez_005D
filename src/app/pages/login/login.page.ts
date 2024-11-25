import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FormBuilder,Validators,FormGroup,FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userdata:any;

  alumno={
    rut:"",
    nombre:"",
    email:"",
    password:"",
    imagen:"",
    isactive:false,
    id: ""
  }
loginForm:FormGroup;




constructor(private authservice:AuthService, 
            private router:Router, 
            private toast: ToastController,
            private alertcontroller: AlertController, 
            private builder: FormBuilder,
            private formsmodule: FormsModule, 
            private reactiveformsmodule: ReactiveFormsModule) {
    this.loginForm = this.builder.group({
      'email' : new FormControl("", [Validators.required, Validators.minLength(8)]),
      'password' : new FormControl("", [Validators.required, Validators.minLength(8)]),
    })
   }

  ngOnInit() {
  }
  async mensajeInicioS(){
    //crea caja de dialogo utilizando el objeto alertcontroller
     const alert = await this.alertcontroller.create({
       header: 'Sesion iniciada correctamente',
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
             this.router.navigate(['/inicio']);   //nos permite navegar hacia un page a partir de un método
           },
         },
       ],
     });
 
     await alert.present();      //activa la ventana del alertcontroller
    
   }
   login(){
    if (!this.loginForm.valid){
      return;
    }
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authservice.GetUserByAlmuno(email).subscribe(resp =>{
      this.userdata = resp;
      console.log(this.userdata);
      if (this.userdata.length === 0) {
        this.loginForm.reset();
        this.alumnoNoExiste();
        return;
      }

      this.alumno={
        rut: this.userdata[0].rut,
        nombre: this.userdata[0].nombre,
        password: this.userdata[0].password,
        email:this.userdata[0].email,
        isactive: this.userdata[0].isactive,
        imagen: this.userdata[0].imagen,
        id: this.userdata[0].id
      }
      if (this.alumno.password !== password) {
        this.loginForm.reset();
        this.Erroralumno(); 
        return;
      }
      if (!this.alumno.isactive) {
        this.loginForm.reset();
        this.alumnoInactivo();
        return;
      }
      this.IniciarSesion(this.alumno);
    })
 }

  private IniciarSesion(alumno:any){
    this.loginForm.reset();
    sessionStorage.setItem('nombre', alumno.nombre);
    sessionStorage.setItem('email', alumno.email);
    sessionStorage.setItem('password', alumno.password);
    sessionStorage.setItem('rut',alumno.rut);
    sessionStorage.setItem('id',alumno.id);
    sessionStorage.setItem('imagen',alumno.imagen);
    sessionStorage.setItem('ingresado', 'true');
    this.showToast('Sesión Iniciada '+ this.alumno.nombre);
    this.router.navigate(['/iniestudiante']);

  }

  async showToast(msg: any){
    const toast= await this.toast.create({
      message:msg,
      duration: 3000
    })
    toast.present();
  }

  async alumnoInactivo(){
    const alerta = await this.alertcontroller.create({ 
      header : 'alumno inactivo',
      message : 'Contactar a admin@admin.cl',
      buttons : ['OK']
    })
    alerta.present();
  }

  async Erroralumno(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Error..',
      message : 'Revise sus credenciales',
      buttons : ['OK']
    })
    alerta.present();
  }
  async alumnoNoExiste(){
    const alerta = await this.alertcontroller.create({ 
      header : 'No existe...',
      message : 'Debe registrarse..',
      buttons : ['OK']
    })
    alerta.present();
  }

  CrearUsuario(){
    this.router.navigate(['/crearusuario']);
  }
}
