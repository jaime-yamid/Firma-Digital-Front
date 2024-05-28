import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup;
  userFormControl: FormControl;

  constructor(
    private fb: FormBuilder,
    private authServices:LoginService,
    private _Activatedroute:ActivatedRoute,
    private _router:Router) {
    this.formLogin = this.fb.group({
      user: ['',[Validators.required,Validators.email]],
      pass: ['',[Validators.required,Validators.minLength(5)]]
    });
  }

  onSubmit() {
    const userValue = this.formLogin.get('user').value;
    const passwordValue = this.formLogin.get('pass').value;
    console.log('Usuario:', userValue);
    console.log('Contraseña:', passwordValue);
    const data = {
      user:userValue,
      pass:passwordValue,
    }
    this.authServices.login(data).subscribe(
      (response) => {
        // Aquí manejas la respuesta del backend, por ejemplo:
        console.log('INGRESO:', response);

      },
      (error) => {
        console.error('Error al ingresar:', error);
      }
    );
  }
}
