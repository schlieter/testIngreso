function Mostrar()
{
 
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño)
{
	/*default:
		alert("Este mes tiene 30 o mas dias");
		break;*///es lo mismo el lugar donde se coloca el default
	case "Febrero" :
	
		alert("Este mes no tiene mas de 29 dias");
		break;
	default:
		alert("Este mes tiene 30 o mas dias");
		break;

}
}