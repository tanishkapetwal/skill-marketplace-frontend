import { Routes } from '@angular/router';
import { Dashboard } from './modules/seller/dashboard/dashboard';
import { Skills } from './modules/seller/skills/skills';
import { AddToListing } from './modules/seller/add-to-listing/add-to-listing';
import { OrderRequestsList } from './modules/seller/order-requests-list/order-requests-list';
import { AcceptRejectOrder } from './modules/seller/accept-reject-order/accept-reject-order';

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
    path: 'teacher-dashboard',
    component: Dashboard,
    children: [
        { path: 'skills', component: Skills },
        { path: 'add-to-listing', component: AddToListing },
        { path: 'order-request', component: OrderRequestsList },
        { path: 'accept-reject-order', component: AcceptRejectOrder }

    ]
    // path: 'teacher-dashboard',
    // pathMatch: 'full',
    // loadComponent: () => {
    //     return import('./modules/seller/dashboard/dashboard').then((m) => m.Dashboard);
    // }
},
{
    path: 'student-dashboard',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./modules/customer/dashboard/dashboard').then((m) => m.Dashboard);
    }
}
];
