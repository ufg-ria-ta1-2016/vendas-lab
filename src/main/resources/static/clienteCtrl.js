angular.module("vendas").controller("clienteCtrl", function ($scope, $http) {
		$scope.novoCliente = function (cliente) {
			$http.post("http://venda.localtunnel.me/cliente/novo", cliente).success(function (resultadoDoResponse) {
				$scope.cliente = resultadoDoResponse;
			});
		};		
	});
