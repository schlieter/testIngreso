/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var elNombre;
	elNombre = prompt("Ingrese un nombre");
	document.getElementById('elNombre').value = elNombre;
}

