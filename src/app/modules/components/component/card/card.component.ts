import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title:string = "TITULO DE PRUEBA"
  @Input() parrafo:string = "loremasdjnajdnkj nadbadhasjksblajdi ajasjdbabdhasbh asndkbahdsbahfbhfaklasklnflsajnfjlasnjlfnajlsn"
}
