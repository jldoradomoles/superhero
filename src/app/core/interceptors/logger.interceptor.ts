import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { delay, finalize } from 'rxjs';
import { LoaderComponent } from '../../components/loader/loader.component';
import { LoadingService } from '../../data/services/loading/loading.service';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  let activeRequest: number = 0;
  let loadingService = inject(LoadingService);

  if (activeRequest === 0) {
    loadingService.loading(true);
  }
  activeRequest++;

  return next(req).pipe(
    delay(3000),
    finalize(() => {
      activeRequest--;
      if (activeRequest === 0) {
        loadingService.loading(false);
      }
    })
  );
};
