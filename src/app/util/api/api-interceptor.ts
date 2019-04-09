import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/do';

@Injectable()

export class ApiInterceptor implements HttpInterceptor {
    constructor(

    ) {

    }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          // TODO sth
        }
      })
    );
  }
}
