import { Routes } from '@angular/router';
import { SellerDashboard } from './modules/seller/seller-dashboard/seller-dashboard';
import { Skills } from './modules/seller/skills/skills';
import { AddToListing } from './modules/seller/add-to-listing/add-to-listing';
import { OrderRequestsList } from './modules/seller/order-requests-list/order-requests-list';
import { SellerListings } from './modules/seller/seller-listings/seller-listings';
import { DashboardLandingPage } from './modules/seller/dashboard-landing-page/dashboard-landing-page';
import { sellerAuthGuard } from './modules/seller/seller-auth/auth-guard';
import { AdminDashboard } from './modules/admin/admin-dashboard/admin-dashboard';
import { adminAuthGuard } from './modules/admin/adminAuth/auth-guard';
import { AdminDashboardLandingPage } from './modules/admin/admin-dashboard-landing-page/admin-dashboard-landing-page';
import { SkillList } from './modules/admin/skill-list/skill-list';
import { SellerList } from './modules/admin/seller-list/seller-list';
import { CustomerList } from './modules/admin/customer-list/customer-list';
import { AddSkill } from './modules/admin/add-skill/add-skill';

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
    path: 'admin/login',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./modules/admin/adminAuth/login/login').then((m) => m.Login);
    }
},
{
    path: 'teacher-dashboard',
    component: SellerDashboard,
    children: [
        { path: '', component: DashboardLandingPage,canActivate:[sellerAuthGuard]},
        { path: 'skills', component: Skills,canActivate:[sellerAuthGuard] },
        { path: 'add-to-listing', component: AddToListing,canActivate:[sellerAuthGuard] },
        { path: 'order-request', component: OrderRequestsList,canActivate:[sellerAuthGuard] },
        { path: 'seller-listings', component: SellerListings,canActivate:[sellerAuthGuard]},
        { path: 'dashboard-landing-page', component: DashboardLandingPage,canActivate:[sellerAuthGuard]}
    ],canActivate:[sellerAuthGuard]
    // path: 'teacher-dashboard',
    // pathMatch: 'full',
    // loadComponent: () => {
    //     return import('./modules/seller/dashboard/dashboard').then((m) => m.Dashboard);
    // }
},
{
    path: 'admin-dashboard',
    component: AdminDashboard,
    children: [
        { path: '', component: AdminDashboardLandingPage,canActivate:[adminAuthGuard]},
        { path: 'skill-list', component: SkillList,canActivate:[adminAuthGuard] },
        { path: 'seller-list', component: SellerList,canActivate:[adminAuthGuard] },
        { path: 'customer-list', component: CustomerList,canActivate:[adminAuthGuard] },
        { path: 'add-skill', component: AddSkill,canActivate:[adminAuthGuard] },
        { path: 'admin-dashboard-landing-page', component: AdminDashboardLandingPage,canActivate:[adminAuthGuard]}
    ],canActivate:[adminAuthGuard]
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
