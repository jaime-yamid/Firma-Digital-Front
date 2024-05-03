import { Component , Output, EventEmitter, Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor,NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>CheckBoxComponent),
    multi:true
  }]
})
export class CheckBoxComponent implements OnInit, ControlValueAccessor{
  value:string=""

  @Input() title:string
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
