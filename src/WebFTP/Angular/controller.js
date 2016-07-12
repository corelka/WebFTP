(function () {
    'use strict';

    angular
        .module('WebFTP')
        .controller('Controller', controller);

    controller.$inject = ['$scope','$http'];

    function controller($scope,$http) {
        $scope.model = model;
        //model is defined on page. That is needed to cast Model from MVC controller to JS object.
        $scope.getData = function (dir, folder) {            
            var div = document.getElementById("folders");
            div.style.pointerEvents = "none";
            //pointerEvents changed for blocking of page while processiing of request on back-end.
            $http({
                //creating of GET responce to collect the data about specific folder from back-end.
                method: "GET",
                url: "api/WebFTP/GetDirInfo?path=" + dir + '&directory=' + folder
            }).then(function success(response) {
                //Handling the request. In case of success receiving of response.
                //Model will be updated with a new data.
                //And unblocking of page.
                $scope.model = response.data;
                div.style.pointerEvents = "auto";
            }, function error(response) {
                //Error handling: logging of error message to the browser console.
                //And unblocking of page.
                console.log(response.statusText);
                div.style.pointerEvents = "auto";
            });
            
        }
    }
})();

