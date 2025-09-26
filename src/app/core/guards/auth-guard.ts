import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/authservice';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const router = inject(Router);
  const expectedRole = route.data['expectedRole'];
  const userRole = auth.getUser()


  console.log("auth guard userRole", userRole)
  console.log("auth guard expectedRole", expectedRole)
  if (auth.isLoggedIn()) {
    if(userRole == expectedRole)
    {
      return true
    }
    else if (userRole === 'CUSTOMER'){
      console.log(userRole === 'CUSTOMER')
      return router.navigate(['student-dashboard'])
    }
    else if (userRole === 'ADMIN'){
      return router.navigate(['admin-dashboard'])
    }
    else if (userRole === 'SELLER'){
      return router.navigate(['teacher-dashboard'])
    }
    
    return router.navigate(["/"])
  }
  // else if (!auth.isLoggedIn()) {
  //   return router.createUrlTree(['/'])
  // }
  // else if (userRole == 'CUSTOMER') {
  //   return false
  // }
  // else if (userRole == 'SELLER') {
  //   return router.createUrlTree(['teacher/login'])
  // }
  // else if (userRole == 'ADMIN') {
  //   return router.createUrlTree(['admin/login'])
  // }
  else {
    // return router.createUrlTree(['/'])
    router.navigate([-1]);
    return false;
  }
};
