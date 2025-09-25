import { Routes } from '@angular/router';

import { SellerDashboard } from './modules/seller/seller-dashboard/seller-dashboard';
import { SellerSkills } from './modules/seller/skills/skills';//to change in export
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
import { AddAdmin } from './modules/admin/add-admin/add-admin';
import { AdminList } from './modules/admin/admin-list/admin-list';
import { Dashboard } from './modules/customer/dashboard/dashboard';
import { Skills } from './modules/customer/skills/skills';
import { SkillById } from './modules/customer/skill-by-id/skill-by-id';
import { MyCourses } from './modules/customer/my-courses/my-courses';
import { authGuard } from './modules/customer/customer-auth/auth-guard';

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
            { path: '', component: DashboardLandingPage, canActivate: [sellerAuthGuard] },
            { path: 'skills', component: SellerSkills, canActivate: [sellerAuthGuard] },
            { path: 'add-to-listing', component: AddToListing, canActivate: [sellerAuthGuard] },
            { path: 'order-request', component: OrderRequestsList, canActivate: [sellerAuthGuard] },
            { path: 'seller-listings', component: SellerListings, canActivate: [sellerAuthGuard] },
            { path: 'dashboard-landing-page', component: DashboardLandingPage, canActivate: [sellerAuthGuard] }
        ], canActivate: [sellerAuthGuard]
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
            { path: '', component: AdminDashboardLandingPage, canActivate: [adminAuthGuard] },
            { path: 'skill-list', component: SkillList, canActivate: [adminAuthGuard] },
            { path: 'seller-list', component: SellerList, canActivate: [adminAuthGuard] },
            { path: 'customer-list', component: CustomerList, canActivate: [adminAuthGuard] },
            { path: 'add-skill', component: AddSkill, canActivate: [adminAuthGuard] },
            { path: 'add-admin', component: AddAdmin, canActivate: [adminAuthGuard] },
            { path: 'admin-list', component: AdminList, canActivate: [adminAuthGuard] },
            { path: 'admin-dashboard-landing-page', component: AdminDashboardLandingPage, canActivate: [adminAuthGuard] }
        ], canActivate: [adminAuthGuard]
        // path: 'teacher-dashboard',
        // pathMatch: 'full',
        // loadComponent: () => {
        //     return import('./modules/seller/dashboard/dashboard').then((m) => m.Dashboard);
        // }
    },
    {

        path: 'student-dashboard',
        component: Dashboard,
        canActivate:[authGuard] 
    },


    {
        path:'student-dashboard/skills/:id',
        pathMatch:'full',
        loadComponent:()=>{
            return import('./modules/customer/skill-by-id/skill-by-id').then((m=>m.SkillById))
        },
          canActivate:[authGuard] 
    },
    {
        path:'student-dashboard/skills',
        pathMatch:'full',
        loadComponent:() =>{
            return import('./modules/customer/skills/skills').then(m=>m.Skills)
        },
          canActivate:[authGuard] 
    },
    {
        path:'student-dashboard/my-courses',
        pathMatch:'full',
        loadComponent:() =>{
            return import('./modules/customer/my-courses/my-courses').then(m=>m.MyCourses)
        },
          canActivate:[authGuard] 
    },

    { path: '**', redirectTo: '', pathMatch: 'full' }
];
