'use strict';

const app = angular.module('NoteApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'partials/noteList.html',
        controller: 'listNotesCtrl'
    }).
    when('/addNote', {
        templateUrl: 'partials/newEditNote.html',
        controller: 'addNoteCtrl'
    }).
    when('/note/:noteId', {
        templateUrl: 'partials/noteDetails.html',
        controller: 'noteDetailsCtrl'
    }).
    when('/note/:noteId/edit', {
        templateUrl: 'partials/newEditNote.html',
        controller: 'viewNoteCtrl'
    }).
    when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'authCtrl'
    }).
    otherwise('/');
});

app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };

    firebase.initializeApp(authConfig);
});