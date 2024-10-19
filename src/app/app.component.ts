import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet} from '@angular/router';
import {CardModule} from "primeng/card";
import {Button} from "primeng/button";
import {TopbarComponent} from "./topbar/topbar.component";
import {FeedComponent} from "./feed/feed.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardModule, Button, TopbarComponent, RouterModule, FeedComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-book-sharing-system-v1-frontend';
}
