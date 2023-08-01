import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  JsonpClientBackend
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token: any= localStorage.getItem('token')
    request= request.clone({

      // set header

      // setHeaders: {
      //   authorization: token
      // }

      // check auth


    })

    return next.handle(request);
  }
}
