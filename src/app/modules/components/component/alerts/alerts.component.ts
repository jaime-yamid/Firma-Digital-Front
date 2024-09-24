import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {
  @Input() open:boolean = false
  @Input() title:String = ""
  @Input() description:String = ""

}
