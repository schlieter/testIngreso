function Mostrar()
{

	var positivo = 0;
	var negativo = 1;
	var respuesta = "si";
	while(1)
	{
		if(respuesta == "si")
		{
			var numero = prompt("Ingrese numero:");
			if (numero >= 0)
			{
				positivo = positivo + parseInt(numero);
			}
			else
			{
				negativo = negativo * numero;
			}
		}
		else
		{
			if (respuesta == "no")
			{
				break;
			}
			else
			{
				alert("Ingrese si o no");
				
			}
		}
		respuesta = prompt("Quiere ingresar un dato");
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN