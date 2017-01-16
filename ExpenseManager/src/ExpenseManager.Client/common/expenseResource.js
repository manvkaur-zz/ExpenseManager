(function () {
    "use strict";
    var app = angular.module("expenseManager")
                     .factory("expenseResource",
                             ["$resource",
                             "appSettings",
                             expenseResource]);
    function expenseResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "/api/expensereport/:id")
    }
}());