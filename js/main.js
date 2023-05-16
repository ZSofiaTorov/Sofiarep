function suma(){
    // ingrese los valores
    let A = 0;
    let B = 0;
    let S = 0;

    alert("por favor ingrese el primer valor ");
    A= parseInt(prompt(""));

    alert(" por favor ingrese el segundo valor");
    B=parseInt(prompt(""));
     S = A + B;    
    alert(" el resultado de la suma es: " + S);


}
  function Opbasicas(){
    // ingresar ls valores

    let A =0;
    let B =0;
    let S=0;
    let R=0;
    let M=0;
    let D=0;

    alert ("ingrese el primer numero ");
    A= parseInt(prompt(""))
    alert ("ingrese el segundo valor");
   B= parseInt(prompt(""))
 S= A+ B;
 R= A-B;
 M= A*B;
 D= A/B;
  alert ("el resultado de la suma es: " + S);
  alert ("el resultado de la resta: " + R);
  alert ("el resultado de la multiplicacion es: " + M);
  alert ("el resultado de la diviosion es: " + D);

} 
  function mayorD(){
   let  A =0;
   let B=0;

   A= parseInt(prompt("INGRESE EL PRIMER VALOR"));
   B= parseInt(prompt("INGRESE EL PRIMER VALOR"));

   if (A==B){
    alert ("los numero ingresados son iguales");
   }
   else if (A<B) {

    alert( A + " es mayor que " + B );

   }
 else {
    alert (B + " es mayor que " + A );
 }

    }

  function menorD(){

    let  A =0;
    let B=0;
    let C=0;


   A= parseInt(prompt("INGRESE EL primer VALOR"));
   B= parseInt(prompt("INGRESE EL segundo VALOR"));
   C= parseInt(prompt("INGRESE EL tercer VALOR"));

   if (A==B && A==C){
    alert ("los numero ingresados son iguales");
   }
   else if (A>B) {

    alert( A + " es menor que " + B );
   }
   else  {

    alert (B + "es menor que " + A);
   }
    if (A>C){

    alert( A + "es menor que " + C);

   }
    else {
 alert (C + "es menor" + A ); 
 
    }
  }
 if (B>C){
 alert(B + "es menor que" + C);

 }
 else {
    alert(C + "es menor que" +B );
 }

  function ParoIM(){

   let A = 0 ;
    A= parseInt(prompt("INGRESE EL VALOR"));

   if (A/2 ==0){
    
   alert( A + "Es par" )
    }
   else {

    aler ( A + " Es impar" ); 
     }
 }

 function Usuario () {

  let E = 0 ;
  let A = 0;
  let R = 0;

  E= parseInt(prompt("INGRESE SU EDAD"));
  A= parseInt(prompt("INGRESE  EL AÑO ACTUAL"));

  R = (A-E);

  alert ("EL AÑO DE SU NACIMIENTO ES: " + R);

 }
 function BANCO () {
   
  let C = 0;
  let A= 0;
  let O= 0 ;
  let D= 0;
  
  C= parseInt(prompt(" INGRESE EL CAPITAL INGRESADO"));
  A= parseInt(prompt("INGRESE LOS AÑOS DE INVERSION "));

  D = ((C*1.7/100)*12)* A;
  alert ( "su inversion es de: " + D  );
  O= C + D
  alert (" el total de su inversion es:  $" + O  + " PESOS");

  }
  function colegio(){
  
  let nombre;
  let materia;
  let N1,N2,N3,N4,N5,N6,N7 = 0;
  let promedio= 0 ;
 

  nombre = prompt("ingrese el nombre");
  materia = prompt ( "ingrese el nombre de la materia");

    alert (" Ingrese las 7 notas correspondientes del estudiante" + nombre)
  N1 = parseFloat(prompt(""));
  N2 = parseFloat(prompt(""));
  N3 = parseFloat(prompt(""));
  N4 = parseFloat(prompt(""));
  N5 = parseFloat(prompt(""));
  N6 = parseFloat(prompt(""));
  N7 =  parseFloat(prompt(""));

  promedio= N1+N2+N3+N4+N5+N6+N7/7;

  if (parseFloat(promedio => 6.1)){

   alert ("APROBO")
  }
  else {
   alert ("REPROBO")
  }

 }
 function Ncuadrado () {

  var numero;
  var cuadrado;

  numero = parseInt(prompt("Ingrese un número para calcular su cuadrado:"));

  cuadrado = numero * numero;
  
  alert("El cuadrado del número es: " + cuadrado);
}
  function Atriangulo (){

    var base;
    var altura;
    var area;

    base = parseInt(prompt("Ingrese la base del triangulo:"));
    altura = parseInt(prompt("Ingrese la altura del triangulo:"));

    area = (base * altura) / 2;

    alert("El area del triangulo es: " + area + " cm2");    
  
  }
  function CmaM (){
    var centimetros;
    var operacion;

    centimetros = prompt("Introduce un valor en centímetros:");
    
    metros = centimetros / 100;

    alert("El resultado de la conversion es = " + operacion);



  }   
  function inversion (){
    var capital;
    var operacion;
    var total;
    var años;

    capital = parseInt(prompt("Ingrese el capital que desea invertir = "));
    años = parseInt(prompt("Ingrese los años invertidos ="));

    operacion = ((capital * 0.017) * 12) * años;
    total = capital + operacion;

    alert("usted invirtio = " + capital);

    if(años == 1)
    {
        alert("El pago que le hace el banco alrededor de " + años + " año, le hace el pago de " + operacion);
        alert("El total de su inversion es de " + total);
    }
    else
    {
        alert("El pago que le hace el banco de " + años + " años, le hace el pago de " + operacion);
        alert("El total de su inversion es de " + total);

   
   }

  }
  function   mercado (){}
  var kg;
    var precio;
    var producto;
    var descuento;
    var operacion;

    producto = prompt("Ingrese el nombre del producto =");
    precio = parseInt(prompt("Ingrese el precio del producto por kilogramo ="));
    kg = parseFloat(prompt("Ingrese cuanto pesa el producto (Kg) ="));

    if (kg <= 2)
    {
        descuento = 0;
    }
    else if ((kg >2) && (kg <=5 ))
    {
        descuento = 10;
    }
    else if ((kg > 5)&&(kg <= 10))
    {
        descuento = 15;
    }
    else if (kg >10)
    {
        descuento = 20;
    }

    operacion = (precio - ((precio * descuento) / 100)) * kg;

    alert ("El descuento del producto es de " + descuento);
    alert ("El total es de = " + operacion);
 {



    }





}



  
