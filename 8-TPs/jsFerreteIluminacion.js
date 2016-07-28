/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 /*var precioBruto
 var precioNeto
 var descuento
 var cantidad = document.getElementById('Cantidad').value;
 var marca = document.getElementById('Marca').value;
 precioBruto = 35 * cantidad;
 switch (marca)
 {
 	case "ArgentinaLuz" :
 		if (cantidad == 3)
 		{
 			descuento = 0.85;
 		}
 		else 
 		{
 			if (cantidad == 4)
 			{
 				descuento = 0.75;
 			}
 			else 
 			{
 				if (cantidad == 5)
 				{
 					descuento = 0.6;
 				}
 				else 
 				{
 					descuento = 0.5;
 				}
 				
 			}
 		}
 		break;
 	case "FelipeLamparas" :
 		if (cantidad == 3)
 		{
 			descuento = 0.9;
 		}
 		else 
 		{
 			if (cantidad == 4)
 			{
 				descuento = 0.75; 
 			}
 			else
 			{
 				if (cantidad == 5)
 				{
 					descuento = 0.7;
 				}
 				else 
 				{
 					descuento = 0.5;
 				}
 			}
 		}
 		break;
 	case "JeLuz":
 	case "HazIluminacion":
 	case "Osram":
 		if (cantidad == 3)
 		{
 			descuento = 0.95;
 		} 
 		else
 		{
 			if (cantidad == 4)
 			{
 				descuento = 0.8; 
 			}
 			else
 			{
 				if (cantidad == 5)
 				{
 					descuento = 0.7;
 				}
 				else
 				{
 					descuento = 0.5;
 				}
 			}
 		}
 	break	
 }
 precioNeto = precioBruto * descuento;
 if (precioNeto > 120)
 	{
 		var IIBB = precioNeto * 0.1;
 		alert("IIBB: "+IIBB);
 		var precioTotal = IIBB + precioNeto;
 	}
 document.getElementById('precioDescuento').value = precioTotal;

*/

 var lamparita = 35;
 var cantidad = document.getElementById('Cantidad').value;	
 var marca = document.getElementById('Marca').value;
 var precio = lamparita * cantidad;
 var preciofinal;
 var x;
 if (cantidad >= 6)
 {
 	preciofinal = precio / 2;
 	document.getElementById('precioDescuento').value = preciofinal;
 }
 else 
 {
	if (cantidad == 5)
	{
		if (marca == "ArgentinaLuz")
		{
			x = precio * 0.4;
			preciofinal = precio - x;
			document.getElementById('precioDescuento').value = preciofinal;
		}
		else
		{
			x = precio * 0.3;
			preciofinal = precio - x;
			document.getElementById('precioDescuento').value = preciofinal;
		}
	}
	else
	{
		if (cantidad == 4)
		{
			if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
			{
				x = precio * 0.25;
				preciofinal = precio - x;
				document.getElementById('precioDescuento').value = preciofinal;
			}
			else
			{
				x = precio * 0.2;
				preciofinal = precio - x;
				document.getElementById('precioDescuento').value = preciofinal;
			}
		}
		else
		{
			if (cantidad == 3)
			{
				if (marca == "ArgentinaLuz")
				{
					x = precio * 0.15;
					preciofinal = precio - x;
					document.getElementById('precioDescuento').value = preciofinal;
				}
				else
				{
					if (marca == "FelipeLamparas")
					{
						x = precio * 0.1;
						preciofinal = precio - x;
						document.getElementById('precioDescuento').value = preciofinal;
					}
					else
					{
						x = precio * 0.05;
						preciofinal = precio - x;
						document.getElementById('precioDescuento').value = preciofinal;
					}
				}
			}
			else
			{
				document.getElementById('precioDescuento').value = precio;
			}		
		}
 	}
 }
 if (preciofinal > 120)
 {
 	var ingBrutos = preciofinal * 0.1;
 	var y = preciofinal + ingBrutos;
 	document.getElementById('precioDescuento').value = y;
 	alert("IIBB Usted pago $"+ingBrutos);
 }
}
