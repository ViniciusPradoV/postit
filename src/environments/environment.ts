// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'https://liga-bootcamp-postit-api.herokuapp.com',
  keys: {
    token: '@post-it/token',
    user: '@post-it/user',
  },
  firebase: {
    apiKey: "AIzaSyA4CzcL3vIpL_TAg_--ly5byXQ9KMPLv04",
      authDomain: "postit-ec240.firebaseapp.com",
      projectId: "postit-ec240",
      storageBucket: "postit-ec240.appspot.com",
      messagingSenderId: "962192667374",
      appId: "1:962192667374:web:7f03d1a697537c0fc039ff",
      measurementId: "G-GTBHYJYQW9"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
