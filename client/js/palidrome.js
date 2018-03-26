var app = angular.module('shaw', []);

app.controller('PalidromeCtrl', function($scope, $http) {

  $scope.words = [];

   $scope.checkPhrase = function(pharse) {
    if(pharse) {

      let ps = { expression: pharse }

      $http.post('http://localhost:3000/palidromeword', ps).then((res) => {
        if(res.status == 200) {
          $scope.words.push({ txt: res.data, status: res.status });
        }
      }).catch((err) => {
        $scope.words.push({ txt: err.data, status: err.status });
      })

      delete $scope.phrase;
    }
  }

});
