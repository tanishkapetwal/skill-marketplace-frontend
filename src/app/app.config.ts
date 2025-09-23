import { ApplicationConfig, importProvidersFrom, NgModule, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { userdetailsInterceptor } from './interceptors/userdetails-interceptor';
  import { CookieService } from 'ngx-cookie-service'; 

export const appConfig: ApplicationConfig = {

  providers: [
    importProvidersFrom(FontAwesomeModule),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
     provideHttpClient(withInterceptors([userdetailsInterceptor])),
     CookieService
  ],
  
};
