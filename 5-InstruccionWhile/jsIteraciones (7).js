function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta = "si";
	while(1)
		if(respuesta == "si")
		{
			contador++;
			var numero = prompt("Ingrese numero: ");
			acumulador = acumulador + parseInt(numero);
			respuesta = prompt("Quiere seguir ingresando datos?:");
		}
		else
		{
			if(respuesta == "no")
			{
				break;
			}
			else
			{
				alert("Ingrese si o no");
				respuesta = prompt("Quiere seguir ingresando datos?:");
			}
		}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN