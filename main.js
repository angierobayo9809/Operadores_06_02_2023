let myStyle ="background:#4FA03E;color:#8FFBEC;font-family:sans-serif;padding:5px;border:2px solid #fff;border-radius:5px;"
let myHeaderStyle="background:#99FF;color:#551EEE;font-family:sans-serif;padding:5px;border:2px solid #7EEE7E;font-size:30px"
let resultado;
let num1 = 50, num2=32;

//Operador de adicion o Suma
resultado = num1 + num2;
console.log(`%c${num1}+${num2}=${resultado}`,myStyle);

//Operador de substracion o resta
resultado = num1 - num2;
console.log(`%c${num1}-${num2}=${resultado}`,myStyle);

//Operador de division
resultado = num1 / num2;
console.log(`%c${num1}/${num2}=${resultado}`,myStyle);

//Operador de multiplicacion
resultado = num1 * num2;
console.log(`%c${num1}X${num2}=${resultado}`,myStyle);

//Operador de elevacion
resultado = num1 ** num2;
console.log(`%c${num1}^${num2}=${resultado}`,myStyle);

//Operador de porcentaje
resultado = num1 % num2;
console.log(`%c${num1}%${num2}=${resultado}`,myStyle);

//Aproximacion con ceil
resultado = num1 / num2;
console.log(`%c La aproximación de ${resultado} con ceil es =${Math.ceil(resultado)}`,myStyle);

//Aproximacion con floor
resultado = num1 / num2;
console.log(`%c La aproximación de ${resultado} con floor es =${Math.floor(resultado)}`,myStyle);

//Devuelve el número mayor
console.log(`%c ${num1},${num2} el número mayor es =${Math.max(num1,num2)}`,myStyle);

//Devuelve el número menor
console.log(`%c ${num1},${num2} el número menor es =${Math.min(num1,num2)}`,myStyle);

//Devuelve la base de la potencia del exponente
console.log(`%c ${num1} elevado ${num2} =${Math.pow(num1,num2)}`,myStyle);

//Devuelve un número pseudo-aleatorio entre 0 y 1
console.log(`%c Un número cualquiera entre ${num2} y ${num1} es =${Math.random(num1,num2)}`,myStyle);

//Devuelve un número redondeado
console.log(`%c Un número cualquiera redondeado entre ${num2} y ${num1} es =${Math.round(Math.random(num1,num2))}`,myStyle);

//Devuelve la raiz cuadrada positiva de un numero
console.log(`%c la raiz cuadrada de ${num1} es =${Math.sqrt(num1)}`,myStyle);

//Devuelve un numero sin decimales
console.log(`%c la raiz cuadrada de ${num1} sin decimales es =${Math.trunc(Math.sqrt(num1))}`,myStyle);

//Devuelve un numero con un decimal
console.log(`%c la raiz cuadrada de ${num1} con 3 decimales es =${Math.sqrt(num1).toFixed(3)}`,myStyle);


console.log(`%c OPERADORES DE COMPARACIÓN`,myHeaderStyle);


//Operador de igualdad
console.log(`%c ${num1} == ${num2} =${num1 == num2}`,myStyle);

//Operador de diferencia
console.log(`%c ${num1} != ${num2} =${num1 != num2}`,myStyle);

//Operador de identidad (si el dato y el tipo de dato son iguales)
console.log(`%c ¿El dato y el tipo de dato son iguales? ${num1} === ${num2} =${num1 === num2}`,myStyle);

//Operador de identidad (si el dato y el tipo de dato son iguales)
console.log(`%c ¿El dato y el tipo de dato son diferentes? ${num1} !== ${num2} =${num1 !== num2}`,myStyle);

//Operador de mayor
console.log(`%c ${num1} es mayor que ${num2} =${num1 > num2}`,myStyle);

//Operador de mayor o igual
console.log(`%c ${num1} es mayor o igual que ${num2} =${num1 >= num2}`,myStyle);

//Operador de menor
console.log(`%c ${num1} es menor que ${num2} =${num1 < num2}`,myStyle);


//Operador de menor o igual
console.log(`%c ${num1} es menor o igual que ${num2} =${num1 <= num2}`,myStyle);