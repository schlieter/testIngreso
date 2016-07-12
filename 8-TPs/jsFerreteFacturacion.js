/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var PrecioUno = document.getElementById('PrecioUno').value;
	var PrecioDos = document.getElementById('PrecioDos').value;
	var PrecioTres = document.getElementById('PrecioTres').value;
	var resultado = parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres);
	alert("El precio final es: "+resultado);
}
function Promedio () 
{
	var PrecioUno = document.getElementById('PrecioUno').value;
	var PrecioDos = document.getElementById('PrecioDos').value;
	var PrecioTres = document.getElementById('PrecioTres').value;
	var resultado = [parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres)] / 3;
	alert("El promedio es: "+resultado);
}
function PrecioFinal () 
{
	var PrecioUno = document.getElementById('PrecioUno').value;
	var PrecioDos = document.getElementById('PrecioDos').value;
	var PrecioTres = document.getElementById('PrecioTres').value;
	var resultado = parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres);
	var IVA = resultado * 1.21;
	alert("Precio final con IVA es: "+IVA);
}