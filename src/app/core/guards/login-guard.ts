import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/authservice';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AuthService);
  const token = localStorage.getItem('accessToken');

  if (token) {
    const userRole = auth.getUser()

    if (userRole === 'CUSTOMER') {
      router.navigate(['/student-dashboard']);
    } else if (userRole === 'SELLER') {
      router.navigate(['/teacher-dashboard']);
    } else if (userRole === 'ADMIN') {
      router.navigate(['/admin-dashboard']);
    } else {
      router.navigate(['/']);
    }

    return false;
  }

  return true;
};
