var app = angular.module("crudApp", []);

	app.controller("crudController", function ($scope, $http) {

        $scope.users = [];
        $scope.form = {
          id: -1,
          name: "",
          mname: "",
          surname: ""
        };

        _refreshPageData();

        function _refreshPageData(){
            $http({
                method: 'GET',
                url: "/user/all"
            }).then(function successCallback(response) {
            $scope.users = response.data;
            console.log(response.data);
            }, function errorCallback(response) {
            console.log(response);
            });
        }

        $scope.update = function () {
            var method = "";
            var url = "";
            var data = {};
            if ($scope.form.id == -1) {
              //Id is absent so add customers - POST operation  
              method = "POST";
              url = "/user/create";
              data.name = $scope.form.name;
              data.middleName = $scope.form.mname;
              data.surName = $scope.form.surname;
            } else {
              //If Id is present, it's edit operation - PUT operation
              method = "PUT";
              url = "/user/update";
              data.id = $scope.form.id;
              data.name = $scope.form.name;
              data.middleName = $scope.form.mname;
              data.surName = $scope.form.surname;
            }
            $http({
                method: method,
                url: url,
                data: angular.toJson(data),
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then(_success, _error);
        };

        //HTTP DELETE- delete customer by id
        $scope.remove = function (user) {

            $http({
              method: 'DELETE',
              url: '/user/delete?id='+user.id
            }).then(_success, _error);
          };

        $scope.edit = function(user){

            $scope.form.id = user.id;
            $scope.form.name = user.name;
            $scope.form.mname = user.middleName;
            $scope.form.surname = user.surName;
        }

        function _success(response) {
            _refreshPageData();
            _clearForm()
        }
        function _error(response) {
            alert(response.data.message || response.statusText);
        }
        
        function _clearForm() {
            $scope.form.name = "";
            $scope.form.mname = "";
            $scope.form.surname = "";
            $scope.form.id = -1;
        }


  	}); 