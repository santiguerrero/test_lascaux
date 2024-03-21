import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LascInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    // for rapidApi films
    const X_RapidAPI_Host = 'moviesdatabase.p.rapidapi.com';
    const X_RapidAPI_Key = '192a57c6ddmsh3bdc85ab5fffc05p1b1473jsndf8581a176bd';

    // for other api
    // const authToken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODQ3OTAxZTc3ZTc3NzhmZGU0N2NkZjQ2ZTVlNzI3MiIsInN1YiI6IjY1ZmI5YmYwNjA2MjBhMDE3YzI2NTgwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05uSchtO6kPM4BkFSQlHrsE3ulPeXtq9UB2lJ3G8eMo';

    const newReq = req.clone({
      setHeaders: {
        // Authorization: `${authToken}`,
        Accept: '*/*',
        // 'X-RapidAPI-Host': X_RapidAPI_Host,
        // 'X-RapidAPI-Key': X_RapidAPI_Key
      }
     
    });

    return next.handle(newReq);
  }
}
