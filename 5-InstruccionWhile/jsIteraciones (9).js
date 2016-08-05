function Mostrar()
{

	var maximo;
	var minimo; 
	var contador = 0;
	var respuesta='si';
	var numero;
	
	while(1)
	{
		if(respuesta == "si")
		{
			contador++;
			var numero = prompt("Ingrese numero:");
			numero = parseInt(numero);
			if(contador == 1)
			{
				minimo = numero;
				maximo = numero;
			}
			else
			{
				if(numero < minimo)
				{
					minimo = numero;
				}
				if(numero > maximo)
				{
					maximo= numero;
				}
			}
		}	
		else
		{
			if(respuesta == "no")//cuando me pide cortar en cierto punto aunque por medio tenga la pregunta 
			{//se debe colocar otro if abajo del de "si" con la condicion de corte ej. "no" || contador == 5
				break;
			}
		}
		respuesta = prompt("Quiere seguir ingresando numeros?");
	}
	document.getElementById('minimo').value = minimo;
	document.getElementById('maximo').value = maximo;




}//FIN DE LA FUNCIÓN