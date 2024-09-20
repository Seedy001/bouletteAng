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
          label: 'Postes',
          icon: 'pi pi-star'
      },
      {
          label: 'Projects',
          icon: 'pi pi-search',
          items: [
              {
                  label: 'Core',
                  icon: 'pi pi-bolt',
                  shortcut: '⌘+S'
              },
              {
                  label: 'Blocks',
                  icon: 'pi pi-server',
                  shortcut: '⌘+B'
              },
              {
                  label: 'UI Kit',
                  icon: 'pi pi-pencil',
                  shortcut: '⌘+U'
              },
              {
                  separator: true
              },
              {
                  label: 'Templates',
                  icon: 'pi pi-palette',
                  items: [
                      {
                          label: 'Apollo',
                          icon: 'pi pi-palette',
                          badge: '2'
                      },
                      {
                          label: 'Ultima',
                          icon: 'pi pi-palette',
                          badge: '3'
                      }
                  ]
              }
          ]
      },
      {
          label: 'Contact',
          icon: 'pi pi-envelope',
          badge: '3'
      }
      ]



}
}
