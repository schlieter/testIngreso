function Mostrar()
{
	var contador = 0;
	var contador1 = 0;
	var contador2 = 0;
	var contador3 = 0;
	var contador4 = 0
	var contador5 = 0;
	var contador6 = 0;
	var contador7 = 0;
	var contador8 = 0;
	var contador9 = 0;
	var contador10 = 0;
	var limite = 1000;
	for(;contador < limite; )
	{
		contador++;
		//console.log(contador);
		
		var x = Math.floor((Math.random()*9)+1);
		if(contador6 = 2)
		{
			continue;
		}
		switch(x)
		{
			case 1:
				contador1++;
				break;
			case 2:
				contador2++;
				break;
			case 3:
				contador3++;
				break;
			case 4:
				contador4++;
				break;
			case 5:
				contador5++;
				break;
			case 6 :
				contador6++;
				break;
			case 7 :
				contador7++;
				break;
			case 8 :
				contador8++;
				break;
			case 9 :
				contador9++;
				break;
			case 10 :
				contador10++;
				break;
		}
	}
	
	console.log("numero uno:"+Math.floor(contador1/limite*100));
	console.log("numero dos:"+Math.floor(contador2/limite*100));
	console.log("numero tres:"+Math.floor(contador3/limite*100));
	console.log("numero cuatro:"+Math.floor(contador4/limite*100));
	console.log("numero cinco:"+Math.floor(contador5/limite*100));
	console.log("numero seis:"+Math.floor(contador6/limite*100));
	console.log("numero siete:"+Math.floor(contador7/limite*100));
	console.log("numero ocho:"+Math.floor(contador8/limite*100));
	console.log("numero nueve:"+Math.floor(contador9/limite*100));
	console.log("numero diez:"+Math.floor(contador10/limite*100));
	
	/*for(var contador = 1; contador <= 10; contador++)
	{
		alert(contador);
	}
	*/
}

