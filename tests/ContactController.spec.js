describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should filter all female contacts', function() {
      let $scope ={};
      $controller('ContactController as vm', {$scope: $scope});

      $scope.vm.search = 'female';

      $scope.vm.changeFilter();

      expect($scope.vm.filteredList.length).toEqual(71);

    });

    it('should filter all people from Manchester', function() {
      let $scope ={};
      $controller('ContactController as vm', {$scope: $scope});

      $scope.vm.search = 'Manch';

      $scope.vm.changeFilter();

      expect($scope.vm.filteredList.length).toEqual(8);

    });

});
