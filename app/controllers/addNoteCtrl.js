'use strict';

app.controller('addNoteCtrl', function($scope, $location, DataFactory) {

    $scope.editedNote = {
        assignedTo : "",
        dependencies: "",
        dueDate: "",
        urgency: "",
        description: "",
        isCompleted: false,
        task: ""
    };

    $scope.editANote = () => {
        DataFactory.addNote($scope.editedNote)
        .then(() => {
            $location.path('/');
        });
    };
});