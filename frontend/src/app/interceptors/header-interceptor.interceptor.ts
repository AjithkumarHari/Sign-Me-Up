import { Injectable, Injector } from '@angular/core';
import { UserService } from '../services/user-service.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private injector : Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userService = this.injector.get(UserService);

    const authReq = request.clone({
      setHeaders : {
        'ExapleHeader' : 'Sample Data',
        'Content-Type' : 'application/json',
        Authorization : ` Bearer ${userService.getToken()}`
      }
    })
    return next.handle(authReq);
  }
}
