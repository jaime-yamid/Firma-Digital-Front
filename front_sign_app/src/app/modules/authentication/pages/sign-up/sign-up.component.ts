import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  formLogin: FormGroup;
  userFormControl: FormControl;

  constructor(
    private fb: FormBuilder,
    private authServices: LoginService,
    private _Activatedroute:ActivatedRoute,
    private _router:Router) {
    this.formLogin = this.fb.group({
      user: ['',[Validators.required,Validators.minLength(5)]],
      email: ['',[Validators.required,Validators.email]],
      pass: ['',[Validators.required,Validators.minLength(5)]]
    });
  }
  onSubmit() {
    const data = {
      user:this.formLogin.get('user').value,
      pass:this.formLogin.get('pass').value,
      email:this.formLogin.get('email').value,
    }
    this.authServices.register(data).subscribe(
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
