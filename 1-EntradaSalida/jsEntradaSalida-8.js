/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDividendo = document.getElementById('numeroDividendo').value;
	var numeroDivisor = document.getElementById('numeroDivisor').value;
	var resultado = parseInt(numeroDividendo) % parseInt(numeroDivisor);
	alert("El resto es: "+resultado);
}
