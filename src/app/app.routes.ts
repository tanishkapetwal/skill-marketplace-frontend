import { Routes } from '@angular/router';
import { Dashboard } from './modules/seller/dashboard/dashboard';
import { Skills } from './modules/seller/skills/skills';
import { AddToListing } from './modules/seller/add-to-listing/add-to-listing';
import { OrderRequestsList } from './modules/seller/order-requests-list/order-requests-list';
import { SellerListings } from './modules/seller/seller-listings/seller-listings';
import { DashboardLandingPage } from './modules/seller/dashboard-landing-page/dashboard-landing-page';
import { authGuard } from './modules/seller/seller-auth/auth-guard';

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
        { path: '', component: DashboardLandingPage,canActivate:[authGuard]},
        { path: 'skills', component: Skills,canActivate:[authGuard] },
        { path: 'add-to-listing', component: AddToListing,canActivate:[authGuard] },
        { path: 'order-request', component: OrderRequestsList,canActivate:[authGuard] },
        { path: 'seller-listings', component: SellerListings,canActivate:[authGuard]},
        { path: 'dashboard-landing-page', component: DashboardLandingPage,canActivate:[authGuard]}
    ],canActivate:[authGuard]
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
},
{ path:'**',redirectTo:'',pathMatch:'full'} 
];
