import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, switchMap, throwError, BehaviorSubject, filter, take } from 'rxjs';

let isRefreshing = false;
const refreshTokenSubject = new BehaviorSubject<string | null>(null);


export const userdetailsInterceptor: HttpInterceptorFn = (req, next) => {
  const http = inject(HttpClient);
  const accessToken = localStorage.getItem('accessToken');
  let authReq = req;
  if (accessToken) {
    authReq = req.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } });
  }
  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        localStorage.removeItem('accessToken')
        if (!isRefreshing) {
          isRefreshing = true;
          refreshTokenSubject.next(null);

          return http.post<{ accessToken: string }>(
            'http://localhost:8081/customer/refresh',
            {},
            { withCredentials: true }
          ).pipe(
            switchMap((res) => {
              isRefreshing = false;
              const newToken = res.accessToken;
              localStorage.setItem('accessToken', newToken);
              refreshTokenSubject.next(newToken);
              return next(req.clone({ setHeaders: { Authorization: `Bearer ${newToken}` } }));
            }),
            catchError(err => {
              isRefreshing = false;
              return throwError(() => err);
            })
          );
        } else {
          return refreshTokenSubject.pipe(
            filter(token => token != null),
            take(1),
            switchMap(token => next(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })))
          );
        }
      }
      return throwError(() => error);
    })
  );
};








