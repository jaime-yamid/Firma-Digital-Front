import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router} from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { AutenticacionService } from 'src/app/services/auth/autenticacion/autenticacion.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  router:any;
formLogin: any;

  constructor(
    private formBuilder: FormBuilder,
    private autenticacionservice: AutenticacionService,
    private aService : AutenticacionService,
    private ruta:Router) { }


    ngOnInit(): void {

      // aqui digo en donde el campo de validatos que con un correo se autentica 
      this.loginForm = this.formBuilder.group({
        user:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(5)]],
      });
  
    }
 


  get user(){
    return this.loginForm.get('user');
  
  }
get password(){
  return this.loginForm.get('password');
}
  realizarlogin(){
    if(this.loginForm.invalid){
      return;
    
    }
    // agarro la informacion la envio en la data es la constante 
      const data=this.loginForm.value;
    
    
    this.autenticacionservice.login(data).subscribe({
      next:(resp: any) => {
        if ( resp && resp.usuario){
          const {nombre,login,email} =  resp.usuario;
          Swal.fire({
            html: `Bienvenido ${nombre}`,
          }).then(()=> {
            this.ruta.navigateByUrl('home/dashboard');        
          });
          }
        },
        error:(error: any) => {
          console.error(error.error.msg);
        }
      });
    }
    


 
}

