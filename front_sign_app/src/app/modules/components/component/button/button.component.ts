import { Component , Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor,NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>ButtonComponent),
    multi:true
  }]
})
export class ButtonComponent implements OnInit, ControlValueAccessor{
  // @Input() text = "Click"
  @Input() buttonControl: any;
  ngOnInit(): void {
  }
  //LOGICA PARA USAR EL COMPONENTE CON FORMULARIOS REACTIVOS
  onChange = (_:any)=>{};
  onTouch = ()=>{};
  isDisable:boolean
  writeValue(value:any): void {
}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisable = isDisabled
  }


  onClick() {
    this.onTouch();
    this.onChange(true); // You can pass any value here based on your requirements
  }
}
