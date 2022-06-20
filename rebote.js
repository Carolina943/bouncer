/*
Quita todos los valores falsos de un arreglo.
Los valores falsos en JavaScript son false, null, 0, "",
undefined y NaN.

Sugerencia: Intenta convertir cada valor a booleano.
*/

function bouncer(arr){
  let arrN = [];
  for(let i = 0; i<arr.length;i++){
   if(Boolean(arr[i])){
     arrN.push(arr[i]);
   }
 }
console.log(arrN);
}

bouncer([7, "ate", "", false, 9]);
