import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './component/button/button.component';
import { InputTextComponent } from './component/input-text/input-text.component';
import { CheckBoxComponent } from './component/check-box/check-box.component';
import { CardsComponent } from './component/cards/cards.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputTextComponent,
    CheckBoxComponent,
    CardsComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    InputTextComponent,
    CheckBoxComponent,
    CardsComponent,
    SideBarComponent
  ],
})
export class ComponentsModule { }
