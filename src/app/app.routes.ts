import { Routes } from '@angular/router';
import { Dashboard } from './modules/customer/dashboard/dashboard';
import { Skills } from './modules/customer/skills/skills';

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
    component:Dashboard,
    children: [{path: 'skills', component: Skills}]
},

// {
//      path: 'student-dashboard',
//     pathMatch: 'full',
//     loadComponent: () => {
//         return import('./modules/customer/dashboard/dashboard').then((m) => m.Dashboard);
//     },
    
// },
// {
//     path:'skills',
//     pathMatch:'full',
//     loadComponent:()=>{
//         return import('./modules/customer/dashboard/dashboard').then((m=>m.Dashboard))
//     },
// },
{
    path:'skills/:id',
    pathMatch:'full',
    loadComponent:()=>{
        return import('./modules/customer/skill-by-id/skill-by-id').then((m=>m.SkillById))
    },
},
{
    path:'skills',
    pathMatch:'full',
    loadComponent:() =>{
        return import('./modules/customer/skills/skills').then(m=>m.Skills)
    },
},
{
    path:'my-courses',
    pathMatch:'full',
    loadComponent:() =>{
        return import('./modules/customer/my-courses/my-courses').then(m=>m.MyCourses)
    },
},

];
