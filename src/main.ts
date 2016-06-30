import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

import { APP_ROUTER_PROVIDERS } from './app/app.routes';
//import {SlimLoadingBarService, SlimLoadingBar} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';
  
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
  APP_ROUTER_PROVIDERS  ,
  //SlimLoadingBarService
])
.catch(err => console.error(err));