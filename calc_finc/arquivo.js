



function Calcular ( ) {


	let valorInicial = parseFloat(document.querySelector("input[name='valor_inicial']").value)
	
	let valorMensal = parseFloat(document.querySelector("input[name='valor_mensal']").value)

	let taxa = parseFloat(document.querySelector("input[name='taxa']").value)

	var periodo = parseInt(document.querySelector("input[name='periodo']").value)

	taxa = taxa/100
	
	let montante = valorInicial

	var totalInvestido = valorInicial + valorMensal*periodo

	
	let jurosCompostos = 0

	let jurosCompostosFinal = 0

	for(let i = 0; i < periodo; i++) {

		
	jurosCompostos = (montante + taxa)/100
	jurosCompostosFinal += jurosCompostos
	montante += jurosCompostos + valorMensal
	
					}

	var montanteFinal = totalInvestido + jurosCompostosFinal


	
	document.getElementById("valor-final").innerHTML= "R$ " + Number(montanteFinal).toFixed(2)
	document.getElementById("valor-investido").innerHTML = "R$ " + Number(totalInvestido).toFixed(2)
	document.getElementById("rendimentos").innerHTML = "R$ " + Number(jurosCompostosFinal).toFixed(2)
}