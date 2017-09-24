function calcula(){
	var ordem = 3;
	var e = 0.001;
	var nIteracoes;

	//atribuição de valores para as matrizesa A e B
	var a = [
		[10,2,3],
		[1,5,1],
		[2,3,10]
	]
	var b = [
		[7],
		[-8],
		[6]
	];

	//montar matrizes C e G;
	var retornoCG = montaCeG(a,b,ordem);
	var c = retornoCG[0];
	var g = retornoCG[1];
	console.log("C", c);
	console.log("G", g);

	//inicia X;
	var x = [
		[1],
		[1],
		[1]
	];

	//calcula X
	var retornoXCont = calculaX(x,c,g,e);
	x = retornoXCont[0];
	nIteracoes = retornoXCont[1];

	mostrarResposta(x,nIteracoes);

}

function montaCeG(a,b,ordem){
	let c = [
		[,,],
		[,,],
		[,,]
	];
	let g = [
		[],
		[],
		[]
	];

	for (let i = 0; i < ordem; i++){
		for(let j = 0; j < ordem; j++){
			c[i][j] = (-1 * a[i][j])/a[i][i];
		}
		c[i][i] = 0;
		g[i][0]=b[i][0]/a[i][i];
	}

	return [c,g];
}

function calculaX(x,c,g,e){
	let xAntigo = [];
	let cont = 0;
	
	do{
		xAntigo = x;
		x = somaMatriz(g,multiplicaMatriz(c,x));

		cont++;
		console.log("X",x);
	}while(verificaE(x,xAntigo,e))

	return [x,cont];
}

function multiplicaMatriz(a,b){
	x = []

	for(let i = 0; i < a.length; i++){
		let linha = [];
		for(let j = 0; j < b[0].length; j++){
			let s = 0;
			for(let k = 0; k < b.length; k++){
				s+= a[i][k] * b[k][j];
			}
			linha.push(s);
		}

		x.push(linha);
	}

	console.log("C*X",x)
	return x;
}

function somaMatriz(a,b){
	let x =[]
	for(let i = 0; i < a.length; i++){
		let linha = []
		for(let j = 0; j < a[0].length; j++){
			linha.push(a[i][j] + b[i][j]);
		}
		x.push(linha);
	}
	console.log("C*X + G",x)
	return x;
}

function verificaE(xk,x,e){

	let status = false;
	for(let i = 0; i < xk.length; i++){
		for(let j = 0; j < xk[0].length; j++){
			if(Math.abs(xk[i][j] - x[i][j]) > e) status = true;
		}
	}

	return status
}

//Mostra a resposta na página
function mostrarResposta(raizes, nIteracoes){
	//esconde botão
	document.querySelector("#btn_calcular").style.display = 'none';

	ul = document.querySelector("#resultado")

	raizes.forEach( function(x,i) {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(`X${i + 1} = ${x}`));
		ul.appendChild(li);
	});

	// document.querySelector("#iteracoes").textContent = `${nIteracoes} iteração(ões)`;
}