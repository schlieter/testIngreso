function Mostrar()
{
var edad;
edad = document.getElementById('edad').value;
if (edad >= 18)
{
	alert("La persona es mayor de edad");
}
else 
{
	alert("La persona es menor de edad");
}
}