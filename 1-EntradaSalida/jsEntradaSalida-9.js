/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo = document.getElementById('sueldo').value;
	sueldo = parseInt(sueldo);
	aumento = sueldo * 0.10;
	var resultado = sueldo + aumento;
	document.getElementById('resultado').value = "su sueldo sera:"+resultado;
	
}
