

console.group("Cuadrado");


function perimetroCuadrado(lado){
    return lado * 4; 
} 

function areaCuadrado(lado) {
   return lado * lado;
}
 

console.groupEnd();

console.group("Triangulo");


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base ,altura){
    return (base * altura) / 2;
}
console.groupEnd();


console.group("Circulo");

function diametroCirculo(radio){
   return  radio * 2;
}  


const PI = Math.PI;
console.log("El PI del circulo es : "+ PI );



function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}  



function areaCirculo(radio){
    return (radio * radio) * PI;
} 

console.groupEnd();


// CUADRADO
function calcularPerimetroCuadrado(){
 const input = document.getElementById("InputCuadrado");
 const value = input.value;

 const perimetro = perimetroCuadrado(value);
 alert(perimetro);
}

function calcularArea(){
const input = document.getElementById("InputCuadrado");
const value = input.value;

const area = areaCuadrado(value);
alert(area);

}

//TRIANGULO

const btn_TrPer = document.getElementById('btn-TrPer')
const btn_TrArea = document.getElementById('btn-TrArea')

const triPerimetro = (lado1, lado2, base) => lado1 + lado2 + base
const triArea = (base, altura) => (base * altura) / 2

const result2 = document.getElementById('main__figuras-result-triangulo')

btn_TrPer.addEventListener('click', function perimetroTriangulo() {
  const ladoA = document.getElementById('inputTrianguloA')
  const ladoB = document.getElementById('inputTrianguloB')
  const ladoC = document.getElementById('inputTrianguloC')

  let data = triPerimetro(parseFloat(ladoA.value), parseFloat(ladoB.value), parseFloat(ladoC.value))
  result2.innerHTML = `${data.toFixed(2)} cm`
})


btn_TrArea.addEventListener('click', function areaTriangulo() {
  const ladoC = document.getElementById('inputTrianguloC')
  const altura = document.getElementById('inputTriangulo')

  let data = triArea(parseFloat(ladoC.value), parseFloat(altura.value))
  result2.innerHTML = `${data.toFixed(2)} cm^2`
})

const btn_CirArea = document.getElementById('btn-CirArea')
const btn_CirPer = document.getElementById('btn-CirPer')



const cirDiametro = (radio) => radio * 2

const cirPerimetro = (radio) => {
  let diametro = cirDiametro(radio)
  return diametro * PI
}

const cirArea = (radio) => Math.pow(radio, 2) * PI

const result3 = document.getElementById('main__figuras-result-circulo')

btn_CirPer.addEventListener('click', function perimetroCirculo() {
  const radio = document.getElementById('inputCirculo')

  let data = cirPerimetro(parseFloat(radio.value))
  result3.innerHTML = `${data.toFixed(2)} cm`
})

btn_CirArea.addEventListener('click', function areaCirculo() {
  const radio = document.getElementById('inputCirculo')

  let data = cirArea(parseFloat(radio.value))
  result3.innerHTML = `${data.toFixed(2)} cm^2`
})


const btn_TrIcBase = document.getElementById('btn-TrIcBase')

btn_TrIcBase.addEventListener('click', function alturaISO() {

  const result4 = document.getElementById('main__figuras-result-trIso')

  const ladoA = document.getElementById('inputTrIcA')
  const ladoB = document.getElementById('inputTrIcB')
  const ladoC = document.getElementById('inputTrIcBase')

  const data = alturaIsoceles(parseFloat(ladoA.value), parseFloat(ladoB.value), parseFloat(ladoC.value))
  
  data >= 0
    ? result4.innerHTML = `${data} cm`
    : alert(data)
})