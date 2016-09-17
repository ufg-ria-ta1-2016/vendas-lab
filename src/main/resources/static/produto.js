angular.module("vendas")
	.controller("novoProdutoCtrl", function ($scope, $http) {
		$scope.novoProduto = function (produto) {
			$http.post("produto/novo", produto).success(function (data) {
				console.log(data);
			});
		};		
	});
