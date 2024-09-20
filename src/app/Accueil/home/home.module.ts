import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { RouterLink, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MegaMenuModule,
    AvatarModule,
    ButtonModule,
    MenubarModule,
    BadgeModule,
    InputTextModule, 
    RippleModule,
    RouterOutlet,
    
  
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
