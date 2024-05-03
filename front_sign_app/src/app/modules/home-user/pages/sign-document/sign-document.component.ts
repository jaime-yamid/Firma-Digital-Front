import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-document',
  templateUrl: './sign-document.component.html',
  styleUrls: ['./sign-document.component.css']
})
export class SignDocumentComponent {
  signForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _Activatedroute:ActivatedRoute,
    private _router:Router) {
    this.signForm = this.fb.group({
      file: ['',[Validators.required]],
    });
  }

  onSubmit() {
    const fileValue = this.signForm.get('file').value;
    console.log('Archivo:', fileValue);
  }
}
