import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {CommonService} from "./app/book-list/common.service";

bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule,
    provideHttpClient(),
  ]
})
  .catch((err) => console.error(err));
