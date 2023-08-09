/*Funciones simples
En todos los casos en que se reciban parámetros, utilizar el prompt para el ingreso

por consola de los valores-
1. Crear una función que convierta pulgadas en centímetros.

Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
2. Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com”
3. Crear una función que recibe un string y devuelve la misma frase pero con
admiración.
4. Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.
5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas.*/

//1

const aCentimetros = pulgada => pulgada * 2.54

let resultado = aCentimetros(10)
console.log(resultado)

//2

const url = string => "http://www." + string + ".com"

let resultado = url("pepito")
console.log(resultado)                            

//3

const conAdmiracion = frase => frase + "!"

let resultado = conAdmiracion("esta es una frase")
console.log(resultado)

//4

const edadPerro = edad => edad * 7

let edadDeMiPerro = edadPerro (3)
console.log(edadDeMiPerro)

//5

const valorHora = salario => salario / 40

let miSalario = valorHora(20000)
console.log(miSalario)