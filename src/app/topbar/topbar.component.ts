import {Component, OnInit} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {Ripple, RippleModule} from "primeng/ripple";
import {BadgeModule} from "primeng/badge";
import {CommonModule, NgClass} from "@angular/common";
import {AvatarModule} from "primeng/avatar";
import {MenuItem} from "primeng/api";
import { InputTextModule } from 'primeng/inputtext';
import {Button} from "primeng/button";


@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    MenubarModule,
    Ripple,
    BadgeModule,
    NgClass,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
    Button
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit{

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/' // Add router link for Home
      },
      {
        label: 'Features',
        icon: 'pi pi-star',
        routerLink: '/features' // Add router link for Features
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt',
            routerLink: '/projects/components' // Add router link for Components
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            routerLink: '/projects/blocks' // Add router link for Blocks
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            routerLink: '/projects/ui-kit' // Add router link for UI Kit
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
                routerLink: '/projects/templates/apollo' // Add router link for Apollo
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
                routerLink: '/projects/templates/ultima' // Add router link for Ultima
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: '/contact' // Add router link for Contact
      }
    ];
  }


}
