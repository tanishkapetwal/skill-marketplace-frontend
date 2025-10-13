import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/authservice';

export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const router = inject(Router);
  const expectedRole = route.data['expectedRole'];
  const userRole = auth.getUser()


  if (auth.isLoggedIn()) {
    if (expectedRole === 'ALL') {
      return true;
    }
    else if (userRole == expectedRole) {
      return true
    }
    else if (userRole === 'CUSTOMER') {
      return router.navigate(['student-dashboard'])
    }
    else if (userRole === 'ADMIN') {
      return router.navigate(['admin-dashboard'])
    }
    else if (userRole === 'SELLER') {
      return router.navigate(['teacher-dashboard'])
    }

    return router.navigate(["/"])
  }
  else {
    router.navigate([-1]);
    return false;
  }

};
