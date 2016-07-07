function Mostrar()
{
var edad;
edad = document.getElementById('edad').value;
var estadoCivil = document.getElementById('estadoCivil').value;
if (edad >= 18 && estadoCivil == "Soltero")
{
	alert("Es soltero y no es menor");
}  
}