'use strict';

app.controller('noteDetailsCtrl', function($scope, $location, $routeParams, DataFactory){

    $scope.getNote = () => {

        DataFactory.getANote($routeParams.noteId)
        .then((note) => {
            $scope.note = note;
            $scope.note.id = $routeParams.noteId;
            console.log($scope.note.id);
        });
    };

    $scope.getNote();
});