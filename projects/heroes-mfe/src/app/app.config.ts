import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { heroesRoutes } from './heroes/heroes.routes';

// import { routes } from './app.routes';
// import { fakeBackendHttpInterceptor } from './interceptor-http.service';
// import * as heroes from './../assets/heroes.json'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(heroesRoutes),
    provideAnimations(),
    provideHttpClient()
    // provideHttpClient(withInterceptors([fakeBackendHttpInterceptor(
      // Array.from(heroes)
    // )])),
  ]
};