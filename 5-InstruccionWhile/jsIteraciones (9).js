function Mostrar()
{

	var maximo = -10000;
	var minimo = 10000;
	var respuesta='si';
	
	while(respuesta!='no')
	{
		var numero = prompt("Ingrese numero:");
		if(numero < minimo)
		{
			minimo = parseInt(numero)+ 0;
		}
		else
		{
			if(numero > maximo)
			{
				maximo = parseInt(numero) + 0;
			}
		}
		document.getElementById('minimo').value = minimo;
		document.getElementById('maximo').value = maximo;
		respuesta = prompt("Quiere seguir ingresando numeros?");
	
	}




}//FIN DE LA FUNCIÓN