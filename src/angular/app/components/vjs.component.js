export default {
    controller: function($scope){
        $scope.title = "VueJS counter"
        $scope.clicks = 0
        $scope.someClickTest = function(){
            $scope.clicks += 1
            $scope.title = "VueJS: Clicked " + $scope.clicks + " times"
        }
    },
    template: `<div class= ''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>VueJS button!</button></div>`
}




/* angular.module('vjs').
    component('vjs', {
        template: "<div class= ''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>VueJS button!</button></div>",
        controller: function($scope){
            $scope.title = "VueJS counter"
            $scope.clicks = 0
            $scope.someClickTest = function(){
                $scope.clicks += 1
                $scope.title = "VueJS: Clicked " + $scope.clicks + " times"
            }
        }
    }) */