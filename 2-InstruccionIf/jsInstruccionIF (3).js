function Mostrar()
{
var edad;
edad = document.getElementById('edad').value;
if (edad < 18)
{
	alert("Usted es menor de edad");
}
else
{
	alert("Usted es mayor de edad");
}
}