import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'

import { sellerAuthInterceptor } from './modules/seller/service/auth.interceptor'
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { adminAuthInterceptor } from './modules/admin/service/auth-interceptor'

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { userdetailsInterceptor } from './core/interceptors/userdetails-interceptor'
  import { CookieService } from 'ngx-cookie-service'


export const appConfig: ApplicationConfig = {

  providers: [
    importProvidersFrom(FontAwesomeModule),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),    
    
    
     provideHttpClient(withInterceptors([userdetailsInterceptor])),
     CookieService
  ],

};
