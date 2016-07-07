function Mostrar()
{
	var numero;
	numero = Math.floor((Math.random()* 10) + 1); 
	if (numero >= 9)
	{
		document.getElementById('numero').value = "Excelente "+numero;//alert("Excelente "+numero);
	}
	else
	{
		if(numero >= 4)
		{
			document.getElementById('numero').value = "Aprobo "+numero;//alert("Aprobo "+numero);
		}
		else
		{
			document.getElementById('numero').value = "Vamos, la proxima se puede "+numero;//alert("Vamos, la proxima se puede "+numero);
		}
	}

}