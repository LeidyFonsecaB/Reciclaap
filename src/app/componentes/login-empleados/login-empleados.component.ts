import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-empleados',
  templateUrl: './login-empleados.component.html',
  styleUrls: ['./login-empleados.css']
})
export class LoginEmpleadosComponent implements OnInit {

  loginEmployees = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.loginEmployees.value);
  }
}
