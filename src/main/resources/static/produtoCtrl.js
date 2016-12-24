angular.module("vendas").controller("produtoCtrl", function ($scope, $http) {
		$scope.novoProduto = function (produto) {
			$http.post("http://venda.localtunnel.me/produto/novo", produto).success(function (resultadoDoResponse) {
				$scope.produto = resultadoDoResponse;
			});
		};		
	});
