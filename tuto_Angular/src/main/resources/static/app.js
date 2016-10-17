var myApp = angular.module('app',[]);

myApp.service('dataService', function($http) {
    this.getData = function(callbackFunc) {
        $http({
            method: 'GET',
            url: '/city/getCity',
        }).success(function(data){
            callbackFunc(data);
        }).error(function(){
            alert("error");
        });
     }
});

myApp.controller('HttpGetController', function($scope, dataService) {
    $scope.datas = [];
    dataService.getData(function(dataResponse) {
        $scope.datas = dataResponse;
    });
});