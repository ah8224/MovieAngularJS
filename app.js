var app = angular.module("MovieApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "home.html"
  })
  .when("/insert", {
    templateUrl : "insert.html"
  })
  .when("/movies", {
    templateUrl : "movies.html"
  })
  .when("/blue", {
    templateUrl : "blue.htm"
  });
});
app.controller('movieCtrl', function ($scope) {  
    $scope.MovieList = [
    {"name":"Movie1",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget.",
    "language":"English"},
    {"name":"Movie2",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget.",
    "language":"Spanish"},
    {"name":"Movie3",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget.",
    "language":"French"},
]
$scope.add = () => {
    alert(" "+$scope.mname+" ");
}
});
