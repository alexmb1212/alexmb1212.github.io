var app = angular.module("levApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'HomeCtrl',
        templateUrl: 'templates/home.html'
    });
})
app.config(function($routeProvider) {
    $routeProvider.when('/music', {
        controller: 'MusicCtrl',
        templateUrl: 'templates/music.html'
    });
})

app.controller('HomeCtrl', function($scope, $routeParams) {
    
});

app.controller('MusicCtrl', function($scope, $routeParams) {
    
});
