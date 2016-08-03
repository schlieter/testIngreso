function Mostrar()
{

	var numero;
	var respuesta = "si";
	var contadorP = 0;
	var contadorN = 0;
	var contadorCero= 0;
	var contadorPar = 0;
	var acumuladorN = 0;
	var acumuladorP = 0;
	while(1)
	{
		if(respuesta == "si")
		{
			numero = prompt("Ingrese numero");
			numero = parseInt(numero);
			while(isNaN(numero))
			{
				numero = prompt("Ingrese numero");
				numero = parseInt(numero);
			}
			if(numero < 0)
			{
				contadorN++;
				acumuladorN = acumuladorN + numero;
				if(numero%2 == 0)
				{
					contadorPar++;
				}
			}
			else
			{
				if(numero > 0)
				{
					contadorP++;
					acumuladorP = acumuladorP + numero;
					if(numero%2== 0)
					{
						contadorPar++;
					}
				}
				else
				{
					contadorCero++;
				}
			}
		}
		else
		{
			break;
		}
		respuesta = prompt("Quiere seguir ingresando numeros?");
	}
	alert("La suma de los negativos es: "+acumuladorN);
	alert("La suma de los positivos es: "+acumuladorP);
	alert("La cantidad de numeros positivos es: "+contadorP);
	alert("La cantidad de numeros negativos es: "+contadorN);
	alert("La cantidad de ceros es: "+contadorCero);
	alert("La cantidad de numeros pares es: "+contadorPar);
	alert("El promedio de los positivos es: "+(acumuladorP/contadorP));
	alert("El promedio de los negativos es: "+(acumuladorN/contadorN));
	alert("La diferencia entre los positivos y negativos es: "+(acumuladorP+acumuladorN));





}