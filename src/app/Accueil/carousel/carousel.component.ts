import { Component, OnInit } from '@angular/core';
import  Image  from '../../models/images-models';
import { ImageService } from '../../services/images.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  images: Image[]=[];
  activeIndex: number = 0; // Pour suivre l'index actif de la galleria
  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
    
  constructor(private imageService: ImageService
              
  ){}

  ngOnInit() {
    this.imageService.getImages().subscribe((result) => {
      this.images = result;
      console.log("Images récupérées:", this.images); // Ajoute ce log
    });
  }
  
}
