import { Routes } from '@angular/router';

export const routes: Routes = [
{
     path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./shared/homepage/homepage').then((m) => m.Homepage);
    }
},
{
     path: 'login',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./modules/customer/login/login').then((m) => m.Login);
    }
}
];
