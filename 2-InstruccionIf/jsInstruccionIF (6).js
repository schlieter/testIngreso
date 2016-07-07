function Mostrar()
{
var edad;
edad = document.getElementById('edad').value;
/*if (edad < 13)
{
	alert("Sos un niño");
}  
else if (edad >= 13 && edad <= 17)
{
	alert("Sos un adolescente");
}
else if (edad >= 18)
{
	alert("Sos mayor");
}
}
*/ if (edad < 13)
{
	alert("Es menor");
}
else 
{
	if(edad > 18)
	{
		alert("Es mayor");
	}
	else
	{
		alert("Es adolescente");
	}
}
}