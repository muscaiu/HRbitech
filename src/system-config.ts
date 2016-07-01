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
  '@angular2-material': 'vendor/@angular2-material'
};

/** User packages configuration. */
const packages: any = {
  angularfire2: {
    defaultExtension: 'js',
    main: 'angularfire2.js'
  },
'@angular2-material/core': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'core.js'
  },
'@angular2-material/checkbox': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'checkbox.js'
  },
'@angular2-material/button': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'button.js'
  },
  
};

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
  'app/navbar',
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
