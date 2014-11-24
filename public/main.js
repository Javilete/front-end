require.config(buildRequireConfig());

require([
        'angular'
    ],
    function ($, angular) {

        angular.element(document).ready(function () {
            angular.bootstrap(document, [
                'rhApp'
            ]);

        });
    });
