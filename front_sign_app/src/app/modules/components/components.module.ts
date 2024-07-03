import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './component/button/button.component';
import { InputTextComponent } from './component/input-text/input-text.component';
import { CheckBoxComponent } from './component/check-box/check-box.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFileComponent } from './component/input-file/input-file.component';
import { CardComponent } from './component/card/card.component';
import { SearchInputComponent } from './component/search-input/search-input.component';
import { ToolTipComponent } from './component/tool-tip/tool-tip.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputTextComponent,
    CheckBoxComponent,
    SideBarComponent,
    InputFileComponent,
    CardComponent,
    SearchInputComponent,
    ToolTipComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ButtonComponent,
    InputTextComponent,
    CheckBoxComponent,
    SideBarComponent,
    InputFileComponent,
    CardComponent,
    ToolTipComponent
  ],
})
export class ComponentsModule { }
