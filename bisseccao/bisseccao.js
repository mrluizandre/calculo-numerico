	function calcula(){
		var a0 = 2;
		var b0 = 3;
		var x0;
		var e = 0.0000001;
		var cont = 0;
		
		//verifica se distância entre os dois montos são maiores que o erro		
		while(Math.abs(a0 - b0) > e) {

			//encontra meio entre os dois pontos
			x0 = (a0 + b0)/2;
			
			//se o ponto do lado esquerdo continua negativo
			//o valor procurado está no lado esquerdo
			if((f(x0))*f(a0) < 0){
				b0 = x0;
			}
			//se positivo
			//o valor procurado está do lado direito
			else {
				a0 = x0;
			}
			cont++;
		}
	
		document.querySelector("#iteracoes").textContent = "Quantidade de iterações: " + cont; 
		document.querySelector("#valor").textContent = "Valor encontrado: " + (a0 + b0)/2;

	}
	
	function f (x) {
		return x * Math.log10(x) - 1;
	}