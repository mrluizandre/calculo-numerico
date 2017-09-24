function calcula(){
	var e = 0.0001;
	var x0 = 3;
	var xn;
	var dif = 1;
	
	var cont = 0;
	
	while(dif > e) {


		xn = x0 - (f(x0)/fl(x0));
	
		//valor absoluto da diferença do ponto atual
		//e o novo encontrado
		dif = Math.abs(xn - x0);

		x0 = xn;
		
		cont++;
	}

	document.querySelector("#iteracoes").textContent = "Quantidade de iterações: " + cont; 
	document.querySelector("#valor").textContent = "Valor encontrado: " + x0;

}

function f(x) {
	return x * Math.log10(x) - 1;
}

function fl(x) {
	return (f(x + Math.pow(10,-8)) - f(x)) / Math.pow(10, -8);
}
