import { HttpInterceptor ,HttpHandler,HttpRequest, HttpEvent} from '@angular/common/http';
import { LoaderService } from '../services/loader';
import { inject, Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
@Injectable()
export class LoaderInterceptor implements HttpInterceptor{
  
  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.showLoader();
    return next.handle(request).pipe(
      finalize(() => this.loaderService.hideLoader())
    );
};
}