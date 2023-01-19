var edad;
var monto;
var nombre;
var descuento;

edad = prompt ("Ingrese la edad del infante");
nombre = prompt ("Ingrese el nombre del infante");
monto = parseInt(prompt ("Ingrese el monto"));


if((edad>=10) & (edad<=12)){

descuento = monto/100*50;
monto= monto - descuento;

alert("Su descuento es de $ "+ descuento);
alert("Su monto es de $ "+ monto);
alert("El infante "+ nombre);

 if(monto>=150){
   alert("Es acreedor de la funda de caramelos");
}
else{
   alert("No es acreedor de la funda de caramelos");
}
}
if((edad>12) & (edad<=14)){

descuento = monto/100*40;
monto= monto - descuento;

alert("Su descuento es de $ "+ descuento);
alert("Su monto es de $ "+ monto);
alert("El infante "+ nombre);

 if(monto>=150){
   alert("Es acreedor de la funda de caramelos");
}
else{
   alert("No es acreedor de la funda de caramelos");
}
}
if((edad>14) & (edad<=16)){

descuento = monto/100*30;
monto= monto - descuento;

alert("Su descuento es de $ "+ descuento);
alert("Su monto es de $ "+ monto);
alert("El infante "+ nombre);

 if(monto>=150){
   alert("Es acreedor de la funda de caramelos");
}
else{
   alert("No es acreedor de la funda de caramelos");
}
}
else{
 alet("No es acreedor del descuento");
}
