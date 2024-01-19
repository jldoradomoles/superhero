import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { LoadingService } from '../../data/services/loading/loading.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable()
export class Interceptorespecial implements HttpInterceptor {
  private _activeRequest: number = 0;
  constructor(private _ngxUiLoaderService: NgxUiLoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('**INGRESANDO AL INTERCEPTOR**');
    if (this._activeRequest === 0) {
      this._ngxUiLoaderService.start();
    }
    this._activeRequest++; //1

    return next.handle(request).pipe(finalize(() => this._stopLoader()));
  }

  private _stopLoader() {
    this._activeRequest--;
    if (this._activeRequest === 0) {
      this._ngxUiLoaderService.stop();
    }
  }
}
