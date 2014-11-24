var buildRequireConfig = function() {

    // Paths used for both app and tests
    var config = {
        paths: {
            'angular': 'lib/angular/angular.min',
            'jquery': 'lib/jquery/jquery.min'
        },
        baseUrl : "/assets/javascripts"
    };

    return config;
}