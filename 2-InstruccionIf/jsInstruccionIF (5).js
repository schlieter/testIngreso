function Mostrar()
{
var edad;
edad = document.getElementById('edad').value;
/*if (edad <= 13 || edad >= 17)    OPCION 1
{
	alert("No sos un adolescente");
}
*/

/*if (edad >= 13 && edad <= 17)   OPCION 2

{
	
}
else 
{
	alert("No sos un adolescente");
}
}
*/
if (edad >= 13)
 {
 		if (edad <= 17) 
		{
	
		}
		else
		{
			alert("No sos un adolescente");
		 }
 }
 else
 {
 	alert("No sos un adolescente");
 }
}