import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem,MenuItem  } from 'primeng/api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  items: MenuItem[] | undefined;
  constructor(private router: Router) {}

  ngOnInit() {
      this.items = [
        {
          label: 'Home',
          icon: 'pi pi-home',
          command: () => this.router.navigate(['/home'])
      },
      {
          label: 'Hotel',
          icon: 'pi pi-star'
      },
      {
          label: 'Restaurant',
          icon: 'pi pi-sparkles',

      },
        {
          label: 'Trip',
          icon: 'pi pi-car',
        },
        {
          label: 'Attraction',
          icon: 'pi pi-map-marker',
        },
      {
          label: 'Contact',
          icon: 'pi pi-envelope',
      }
      ]



}
}
