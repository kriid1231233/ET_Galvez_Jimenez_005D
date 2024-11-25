import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule),
    canActivate: [AutorizadoGuard]

  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperarcontrasena',
    loadChildren: () => import('./pages/recuperarcontrasena/recuperarcontrasena.module').then( m => m.RecuperarcontrasenaPageModule)
  },
  {
    path: 'crearusuario',
    loadChildren: () => import('./pages/crearusuario/crearusuario.module').then( m => m.CrearusuarioPageModule)
  },
  {
    path: 'iniestudiante',
    loadChildren: () => import('./pages/iniestudiante/iniestudiante.module').then( m => m.IniestudiantePageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'detalle-evento',
    loadChildren: () => import('./pages/detalle-evento/detalle-evento.module').then( m => m.DetalleEventoPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'historialdeeventos',
    loadChildren: () => import('./pages/historialdeeventos/historialdeeventos.module').then( m => m.HistorialdeeventosPageModule)
  },
  {
    path: 'comentarevento',
    loadChildren: () => import('./pages/comentarevento/comentarevento.module').then( m => m.ComentareventoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
