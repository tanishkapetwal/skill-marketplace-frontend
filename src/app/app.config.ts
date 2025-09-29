import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http'


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { userdetailsInterceptor } from './core/interceptors/userdetails-interceptor'
import { CookieService } from 'ngx-cookie-service'
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoaderInterceptor } from './core/interceptors/loader-interceptor-interceptor'

export const appConfig: ApplicationConfig = {

  providers: [
    importProvidersFrom(FontAwesomeModule),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([userdetailsInterceptor])),
    CookieService,
    MatPaginatorModule,
    provideHttpClient(
      withInterceptorsFromDi() 
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor, 
      multi: true 
    }
  ],

};
