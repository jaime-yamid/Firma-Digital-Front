import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { SingService } from 'src/app/services/signature/sing.service';

@Component({
  selector: 'app-sign-document',
  templateUrl: './sign-document.component.html',
  styleUrls: ['./sign-document.component.css']
})
export class SignDocumentComponent {
  signForm: FormGroup;
  signedFile: any;
  //ALMACENAR LA VARIABLE PARA ENVIAR
  formData: FormData = new FormData();
  constructor(
    private fb: FormBuilder,
    private signatureService:SingService,
    private _Activatedroute:ActivatedRoute,
    private _router:Router) {
    this.signForm = this.fb.group({
      file: ['',[Validators.required]],
    });
  }
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      this.formData.append('file', file, file.name);
      console.log(this.formData);
    }
  }
  onSubmit() {
    this.signatureService.signFile(this.formData).subscribe(
      (response) => {
        // Aquí manejas la respuesta del backend, por ejemplo:
        this.signedFile = response;
        console.log('Archivo firmado:', this.signedFile);

      },
      (error) => {
        console.error('Error al firmar el archivo:', error);
      }
    );
  }
}
