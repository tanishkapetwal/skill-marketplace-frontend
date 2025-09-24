import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const auth=inject(AuthService);
  const router=inject(Router);
  if(auth.isLoggedIn()){
  return true;}
  else{
    return router.createUrlTree(['admin/login'])
  }
};
