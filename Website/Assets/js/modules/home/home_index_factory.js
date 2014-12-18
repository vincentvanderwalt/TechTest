var HomeIndexRestFactory = function ($http) {

    var urlBase = 'http://localhost:7882/api/Test/';
        var dataFactory = {};

        dataFactory.getTestData = function () {
            return $http.get(urlBase);
        };
    
        dataFactory.updateTestString = function (testString) {
            return $http.post(urlBase, testString);
        };      

        return dataFactory;
};
HomeIndexRestFactory.$inject = ['$http'];