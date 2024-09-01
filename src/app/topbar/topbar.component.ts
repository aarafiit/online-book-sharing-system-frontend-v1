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
        icon: 'pi pi-home'
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ]
  }

}
