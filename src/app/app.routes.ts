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
     path: 'student/login',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./modules/customer/customer-auth/login/login').then((m) => m.Login);
    }
},
{
     path: 'teacher/login',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./modules/seller/seller-auth/login/login').then((m) => m.Login);
    }
},
{
     path: 'student-dashboard',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./modules/customer/dashboard/dashboard').then((m) => m.Dashboard);
    }
}
];
