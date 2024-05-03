import { Component , Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor,NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>InputTextComponent),
    multi:true
  }]
})
export class InputTextComponent implements OnInit, ControlValueAccessor{
  value:string=""

  @Input() placeholder = ""
  @Input() Label = ""
  @Input() type = ""

  ngOnInit(): void {

  }
  //LOGICA PARA USAR EL COMPONENTE CON FORMULARIOS REACTIVOS
  onChange = (_:any)=>{};
  onTouch = ()=>{};
  isDisable:boolean
  writeValue(value:string): void {
      if (value) {
        this.value = value
      }
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


 onInputChange(event: any) {
    this.value = event.target.value;
    this.onChange(this.value);
    this.onTouch();
  }
}
