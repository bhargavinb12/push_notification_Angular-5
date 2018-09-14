Push Notification Angular5 Base Code

The web Push Notification project  is an effort to create a project similar to the Nature Net site.
The project basically focuses on creating a sign-up option, login , assigning special privileges to the logged in user like adding an article or editing his own article. 
The users can subscribe or un-subscribe to get notifications when a desired user pushes an article.
The project is implemented using Angular5 for front-end and firebase for back-end.

Installation 

The first step is installing the angular-cli :-

1. npm install -g @angular/cli
2. ng new my-app
3. cd my-app
4. ng serve

Test the setup :-
open http://localhost:4200

The second step is to create an account on firebase .

The third step is installing firebase and angularfire :-

1. npm install --save firebase@^4.4.0 angularfire2@^5.0.0-rc.2

The fourth step is adding the Firebase config to environments variable.

1. Open /src/environments/environment.ts and add your Firebase configuration. The project configuration is found in the Firebase console.
   
Consider the following example:-
   export const environment = {
    production: false,
    firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};

The fifth step is import all the required modules in your application.

Build With :-

Visual Studio - IDE
Firebase      - Database

Acknowledgements :-

Inspiration for idea -

1. Stephen MacNeil
2. Mohammad Javad Mahzoon












