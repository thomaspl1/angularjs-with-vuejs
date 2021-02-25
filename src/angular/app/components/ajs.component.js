export default {
    controller: function($scope){
        $scope.title = "AngularJS counter"
        $scope.clicks = 0
        $scope.someClickTest = function(){
            $scope.clicks += 1
            $scope.title = "AngularJS: Clicked " + $scope.clicks + " times"
        }
    },

    template: `<div class= ''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>AngularJS button!</button></div>`
}

/* angular.module('ajs').
    component('ajs', {
        template: "<div class= ''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>AngularJS button!</button></div>",
        controller: function($scope){
            $scope.title = "AngularJS counter"
            $scope.clicks = 0
            $scope.someClickTest = function(){
                $scope.clicks += 1
                $scope.title = "AngularJS: Clicked " + $scope.clicks + " times"
            }
        }
    }) */