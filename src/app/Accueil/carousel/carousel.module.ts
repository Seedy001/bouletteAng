import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { GalleriaModule } from 'primeng/galleria';
import { ImageService } from '../../services/images.service';



@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule
  ],
  exports:[CarouselComponent],
  providers:[ImageService]
})
export class CarouselModule { }
