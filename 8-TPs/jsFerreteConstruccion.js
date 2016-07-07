/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var Largo = document.getElementById('Largo').value;
var Ancho = document.getElementById('Ancho').value;
var resultado = (Largo*2)+(Ancho*2);
var perimetro = resultado * 3;
alert("La cantidad de alambre que necesita es: "+perimetro);
}
function Circulo () 
{
	var radio = document.getElementById('Radio').value;
	var perimetro = 2*3.14*radio;
	var resultado = perimetro * 3;
	alert("La cantidad de alambre que necesita es: "+resultado);
}
function Materiales () 
{
	var Largo = document.getElementById('Largo').value;
	var Ancho = document.getElementById('Ancho').value;
	var cemento = (Largo * Ancho) * 2;
	var cal = (Largo * Ancho) * 3;
	alert("Se necesitan "+cemento+" bolsas de cemento y "+cal+" de cal");
}