// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'firebase': 'vendor/firebase/firebase.js',
  'angularfire2': 'vendor/angularfire2',
  '@angular2-material': 'vendor/@angular2-material',
  'underscore': 'vendor/underscore/underscore.js',
  '@vaadin': 'vendor/@vaadin'
};

/** User packages configuration. */
const packages: any = {
  angularfire2: {
    defaultExtension: 'js',
    main: 'angularfire2.js'
  },
  '@vaadin/angular2-polymer': { 
    main: 'index.js', 
    defaultExtension: 'js' 
  }
};

//ONLY FOR @angular-material
const materialPkgs:string[] = [
  'core',
  'button',
  'card',
  'checkbox',
  'list',
  'input',
  'progress-circle',
  'sidenav',
  'toolbar',
];
materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});


////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular2-material',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/firebase-list',
  'app/test-route',
  'app/test-component',
  'app/home-component',
  'app/formular',
  'app/login',
  'app/ss',
  // './button/button.js',
  // './card/card.js',
  // './checkbox/checkbox.js',
  // './input/input.js',
  // './progress-circle/progress-circle.js',
  // './sidenav/sidenav.js',
  // './toolbar/toolbar.js',
  // 'app/mdcomponents',
  'app/statistics',
  'app/reports',
  'app/home',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
    //'angular2-jwt': 'node_modules/angular2-jwt/angular2-jwt'
    'angular2-jwt': 'https://npmcdn.com/angular2-jwt@0.1.16/angular2-jwt.js'
  },
  packages: 
    cliSystemConfigPackages,
    "/ng2-slim-loading-bar": {"defaultExtension": "js"}
});

// Apply the user's configuration.
System.config({ map, packages });
