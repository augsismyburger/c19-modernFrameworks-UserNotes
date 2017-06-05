'use strict';

app.controller('listNotesCtrl', function($scope, DataFactory, $location){

    $scope.getNoteList = function() {
        DataFactory.getNoteList()
        .then((notes) => {
            $scope.notes = notes;
        });
    };
    $scope.removeNote = function(item) {
        console.log('clicked', item);
        DataFactory.removeNote(item)
        .then((data) => {
            console.log('datas', data);
            $scope.getNoteList();
        });
    };

$scope.getNoteList();

});