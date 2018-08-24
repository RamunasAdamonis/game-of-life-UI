import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const MaterialModules = [MatToolbarModule, MatIconModule, MatSidenavModule];

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, HttpClientModule, ...MaterialModules],
  exports: [HeaderComponent, SidenavComponent, ...MaterialModules],
  declarations: [HeaderComponent, SidenavComponent]
})
export class CoreModule {}
