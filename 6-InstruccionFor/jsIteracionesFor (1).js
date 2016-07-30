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
	var limite = 100000;
	for(;contador < limite; )
	{
		contador++;
		//console.log(contador);
		
		var x = Math.floor((Math.random()*9)+1);
		while(x == 5 && contador5>(limite*0.03))
		{
			x = Math.floor((Math.random()*9)+1);
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
	
	console.log("numero uno:"+(contador1/limite*100));
	console.log("numero dos:"+(contador2/limite*100));
	console.log("numero tres:"+(contador3/limite*100));
	console.log("numero cuatro:"+(contador4/limite*100));
	console.log("numero cinco:"+(contador5/limite*100));
	console.log("numero seis:"+(contador6/limite*100));
	console.log("numero siete:"+(contador7/limite*100));
	console.log("numero ocho:"+(contador8/limite*100));
	console.log("numero nueve:"+(contador9/limite*100));
	console.log("numero diez:"+(contador10/limite*100));
	
	/*for(var contador = 1; contador <= 10; contador++)
	{
		alert(contador);
	}
	*/
}

