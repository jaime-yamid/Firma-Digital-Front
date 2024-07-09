import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router} from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { AutenticacionService } from 'src/app/services/auth/autenticacion/autenticacion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  formLogin: any;
  //USER NAME
  username :String = ""
  //ALERTA
  titleAlert :String = `Bienvenido ${this.username} !`
  constructor(
    private formBuilder: FormBuilder,
    private autenticacionservice: AutenticacionService,
    private router:Router) { }


    ngOnInit(): void {

      // aqui digo en donde el campo de validatos que con un correo se autentica
      this.loginForm = this.formBuilder.group({
        user:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(5)]],
      });

    }
  login(){
    if(this.loginForm.invalid){
      return;

    }
    // agarro la informacion la envio en la data es la constante
      const data=this.loginForm.value;
    this.autenticacionservice.login(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.username = response.usuario
        this.titleAlert = `Bienvenido ${this.username} !`
        this.router.navigateByUrl('home/dashboard');
      },
      (err:any) =>{
        console.error(err)
      }
    );
    }
}
