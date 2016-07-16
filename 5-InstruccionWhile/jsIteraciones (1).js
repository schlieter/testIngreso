function Mostrar()
{
	var contador = 0;
	while(1)
	{
		contador = contador + 1;
		if ( contador == 3)
		{
			continue;
		}
		alert("while "+contador);
		if (contador == 6)
		{
			break;
		}
		alert("FIN "+contador);

	}	






	/*if (contador < 10) ESTO NO SE HACEEEE
	{
		alert(contador);
		contador = contador + 1;
	}
	if (contador < 10)
	{
		alert(contador);
		contador = contador + 1;
	}
	*/


	/*
	//while (contador <= 10)
	while(true)
	{
		alert(contador);
		//contador = contador + 1;
		if (contador == 3)
		{
			break;
		}
		contador = contador + 1;
	}
	*/
	
}