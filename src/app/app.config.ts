import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { sellerAuthInterceptor } from './modules/seller/service/auth.interceptor';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { adminAuthInterceptor } from './modules/admin/service/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),      // essential for linking app.routes.ts file to app
    provideHttpClient(withInterceptors([sellerAuthInterceptor])),   // interceptor attached to project
    provideHttpClient(withInterceptors([adminAuthInterceptor]))
  ]
};
