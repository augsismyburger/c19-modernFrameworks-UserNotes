'use strict';

app.controller('viewNoteCtrl', function($scope, $routeParams, $location, DataFactory) {

    $scope.editedNote = {
        assignedTo : "",
        dependencies: "",
        dueDate: "",
        urgency: "",
        description: "",
        isCompleted: "",
        task: ""
    };
    DataFactory.getANote($routeParams.noteId)
    .then((noteObj) => {
        $scope.editedNote = noteObj;
        $scope.editedNote.id = $routeParams.noteId;


    });

    $scope.editANote = () => {
        DataFactory.editNote($routeParams.noteId, $scope.editedNote)
        .then((response) => {
            console.log('posted');
            $location.path('#!/');
        });
    };

});