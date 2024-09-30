import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PosteComponent} from "./poste.component";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    PosteComponent
  ],
  exports: [
    PosteComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DialogModule
  ]
})
export class PosteModule { }
