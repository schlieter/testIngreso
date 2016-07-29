/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var Edad = prompt("Ingrese edad: ");
 while(isNaN(Edad) || (Edad < 18 || Edad > 90))
 {
 	Edad = prompt("Error, ingrese edad nuevamente: ");
 }
 document.getElementById('Edad').value = Edad;

 var Sexo = prompt("Ingrese sexo:");
 while(!isNaN(Sexo) || (Sexo != "m" && Sexo != "f"))
 {
 	Sexo = prompt("Error, ingrese sexo nuevamente: ");
 }
 document.getElementById('Sexo').value = Sexo;

 var EstadoCivil = prompt("Ingrese estado civil:")
 while(isNaN(EstadoCivil) || (EstadoCivil < 1 || EstadoCivil > 4))
 {
 	EstadoCivil = prompt("Ingrese nuevamente el estado civil");
 }
 switch(EstadoCivil)
 {
 	case "1":
 		document.getElementById('EstadoCivil').value = "Soltero";
 		break;
 	case "2":
 		document.getElementById('EstadoCivil').value = "Casado";
 		break;
 	case "3":
 		document.getElementById('EstadoCivil').value = "Divorciado";
 		break;
 	case "4":
 		document.getElementById('EstadoCivil').value = "Viudo";
 		break;
 }
 var Sueldo = prompt("Ingrese sueldo: ");
 while(isNaN(Sueldo) || Sueldo < 8000)
 {
 	Sueldo = prompt("Ingrese el sueldo nuevamente");
 }
 document.getElementById('Sueldo').value = Sueldo;
 var Legajo = prompt("Ingrese numero de legajo");
 while(isNaN(Legajo) || (Legajo < 0 || Legajo > 9999))
 {
 	Legajo = prompt("Ingrese nuevamente numero del legajo");
 }
 document.getElementById('Legajo').value = Legajo;
 var Nacionalidad = prompt("Ingrese nacionalidad")
 while(!isNaN(Nacionalidad)|| Nacionalidad != "A" && Nacionalidad != "E" && Nacionalidad != "N")
 {
 	Nacionalidad = prompt("Ingrese nuevamente su nacionalidad");
 }
 document.getElementById('Nacionalidad').value = Nacionalidad;


 
 


}
