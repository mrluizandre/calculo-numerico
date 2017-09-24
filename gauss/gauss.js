function calcula(){

	var matrizCoeficientes = [
		[1,4,52],
		[27,110,-3],
		[22,2,14]
	]

	var matrizResultados = [
		[57],
		[134],
		[30]
	]

	//matriz extendida vazia
	var matrizExtendida = [
		[,,,],
		[,,,],
		[,,,]
	]

	//matriz escalonada vazia
	var matrizEscanlonada = [
		[,,,],
		[,,,],
		[,,,]
	]

	var raizes;

	matrizExtendida = juntarMatrizes(matrizCoeficientes, matrizResultados);
	matrizEscanlonada = escalonar(matrizExtendida);
	raizes = retroSubstituir(matrizEscanlonada);

	mostrarResposta(raizes);
}

//junta a matriz de coeficientes com a matris de resultados
function juntarMatrizes(coeficientes, resultados){
	let extendida = [
		[,,,],
		[,,,],
		[,,,]
	]

	for(let i = 3 - 1; i >= 0; i--){
		for (let j = 3 - 1; j >= 0; j--) {
			extendida[i][j] = coeficientes[i][j];
		}
		extendida[i][3] = resultados[i][0];
	}
	return extendida;
}

//faz escalonamento da matriz
function escalonar(m){ 
  
  for (let k = 0 ; k < 2 ; k++) {
    for (let i = k + 1; i <= 2 ; i++) {
      let aux = ((m[i][k]) / (m[k][k]));
      for (let j = k ; j <= 3 ; j++) {
          m[i][j] = (m[i][j]) - (aux * m[k][j]);
      }
    }
  }
  return m;
}

// faz retrosubstituição
function retroSubstituir(m) {
	console.log(m);
  let x = [0, 0, 0];
  
  for(let k=2; k>=0; k--){

    let soma = 0;
    
    for(let i=2; i>=k; i--){
      soma = soma + x[i]*m[k][i];            
    }
    
    x[k] = (m[k][3] - soma)/(m[k][k]);
  }	
  return x;
}

function mostrarResposta(raizes){
	//esconde botão
	document.querySelector("#btn_calcular").style.display = 'none';

	ul = document.querySelector("#resultado")

	raizes.forEach( function(x,i) {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(`X${i + 1} = ${x}`));
		ul.appendChild(li);
	});
}