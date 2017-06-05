'use strict';

app.factory('DataFactory', function($q, $http, FBCreds) {

    let addNote = (newNote) => {
        return $q((resolve, reject) => {
            let holder = JSON.stringify(newNote);
            $http.post(`${FBCreds.databaseURL}.json`, holder)
            .then((newNoteOb) => {
                resolve(newNoteOb);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    let editNote = (noteId, editedNote) => {
        return $q ((resolve, reject) => {
            let holder = JSON.stringify(editedNote);
            $http.patch(`${FBCreds.databaseURL}/${noteId}.json`, holder)
            .then((noteObj) => {
                resolve(noteObj);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    let getANote = (noteId) => {
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/${noteId}.json`)
            .then((noteObj) => {
                resolve(noteObj.data);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    let removeNote = (noteId) => {
        return $q((resolve, reject) => {
            $http.delete(`${FBCreds.databaseURL}/${noteId}.json`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    let getNoteList = () => {
        let notes = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}.json`)
          .then ((notesObj) => {
            let itemCollection = notesObj.data;
            console.log('the dats', itemCollection);
            Object.keys(itemCollection).forEach((key) => {
                itemCollection[key].id = key;
                notes.push(itemCollection[key]);
            });
            resolve(notes);
            console.log('the dats', notes);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    return {getNoteList, getANote, editNote, addNote, removeNote};
});