import { LoginEmpleadosComponent } from './componentes/login-empleados/login-empleados.component';
import { RegistroUsuariosComponent } from './componentes/registro-usuarios/registro-usuarios.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroEmpleadosComponent } from './componentes/registro-empleados/registro-empleados.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-empleados', component: LoginEmpleadosComponent},
  { path: 'registro-empleados', component: RegistroEmpleadosComponent },
  { path: 'registro-usuarios', component: RegistroUsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
