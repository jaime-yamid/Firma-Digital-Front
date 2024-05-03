import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router){
}
  hiddensidebar_ = true

  hideShow(){
    this.hiddensidebar_ = !this.hiddensidebar_
  }
}
