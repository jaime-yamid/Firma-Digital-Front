import { Component } from '@angular/core';
import { FormBuilder , FormGroup } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  inputValueFromChild: string = '';
  onchangeEmail(value: string) {
    this.inputValueFromChild = value;
  }
  onchangePass(value: string) {
    this.inputValueFromChild = value;
  }
}
