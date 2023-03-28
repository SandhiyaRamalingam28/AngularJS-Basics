var app= angular.module('myApp',[]);
app.controller('resultCtrl',function($scope){
    $scope.result = [{name: 'Tamil', grade: 'A+'},
                    {name: 'Monica', grade: 'A+'},
                    {name: 'Aarthi', grade: 'A'},
                    {name: 'San', grade: 'B'}];
});

