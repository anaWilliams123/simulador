

function pesoideal()
 {var dato, peso, altura, sexo, edad;dato = window.prompt("Dígame su altura en cm");
altura = parseInt(dato);
dato = window.prompt("Digame su edad en años")
edad = parseInt(dato);
sexo = window.prompt("Dígame su sexo, hombre = h o mujer = m");
if (sexo == "h"){peso = 50 + ((altura - 150) / 4)*3 + (edad - 20)/4;}

else peso = peso * 0.9;alert("Su peso ideal es " + peso + " Kg")}