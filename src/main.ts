import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { FIREBASE_PROVIDERS, 
         defaultFirebase,
         AngularFire,
         AuthMethods,
         AuthProviders,
         firebaseAuthConfig } from 'angularfire2';
import { AUTH_PROVIDERS} from 'angular2-jwt';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
//import {SlimLoadingBarService, SlimLoadingBar} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';

import { AppComponent, environment } from './app/';
  
  enableProdMode();

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyCK4SPSKz6vVaq-4ktZI2xW29ThboDuoKM",
    authDomain: "angular2cloud.firebaseapp.com",
    databaseURL: "https://angular2cloud.firebaseio.com",
    storageBucket: "angular2cloud.appspot.com",
  }),
  firebaseAuthConfig({
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  }),
  APP_ROUTER_PROVIDERS  ,
  AUTH_PROVIDERS
  //SlimLoadingBarService
])
.catch(err => console.error(err));