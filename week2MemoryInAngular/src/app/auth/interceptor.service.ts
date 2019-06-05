import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.auth.getToken()){
    let temp = request.clone({
      setHeaders: {
        'Access-Control-Allow-Headers': '*',
        'Authorization':`Bearer ${this.auth.getToken()}`
      },
    })
    return next.handle(temp);
    }
    else{
      return next.handle(request);
    }
  }

}