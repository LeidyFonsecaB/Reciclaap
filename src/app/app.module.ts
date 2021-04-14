import { LoginComponent } from './componentes/login/login.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroEmpleadosComponent } from './componentes/registro-empleados/registro-empleados.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroUsuariosComponent } from './componentes/registro-usuarios/registro-usuarios.component';
import { LoginEmpleadosComponent } from './componentes/login-empleados/login-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroEmpleadosComponent,
    InicioComponent,
    FooterComponent,
    RegistroUsuariosComponent,
    LoginEmpleadosComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
