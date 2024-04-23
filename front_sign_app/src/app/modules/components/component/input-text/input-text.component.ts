import { Component , Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {
  value:string=""
  @Input() placeholder = ""
  @Input() Label = ""
  @Input() type = ""
  @Output() valueChanged = new EventEmitter<string>();
  onInputChange() {
    this.valueChanged.emit(this.value);
  }
}
