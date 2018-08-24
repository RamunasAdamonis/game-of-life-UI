import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  sideBar: MatSidenav;
  constructor() {}

  public toggleSideBar(): void {
    this.sideBar.toggle();
  }
}
