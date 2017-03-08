'use strict';

/**
 * Configure which vendor files are included in build
 */
module.exports = function () {
    var config = {
        "css":
        [
            "./node_modules/bootstrap/dist/css/bootstrap.min.css"
        ],
        "js":
        [
            "./node_modules/jquery/dist/jquery.min.js",
            "./node_modules/angular/angular.min.js",
            "./node_modules/bootstrap/dist/js/bootstrap.min.js",
            "./node_modules/lodash/lodash.min.js",
            "./node_modules/moment/moment.js"
        ]
    };
    return config;
}