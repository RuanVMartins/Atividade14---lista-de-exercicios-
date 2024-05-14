function sasa(){
    const numUm = 5;
    const numDois = 3;
    let resultado = (numUm - numDois);
    window.alert("A diferença entro os numeros é "+ resultado);

}

function dobro(){
    const numUm = 5;
    const numDois = 3;
let resultado2 = (numUm * 2 + numDois * 3);
window.alert("O dobro da primeira mais o triplo da segunda variáve é "+ resultado2);
}

function dudu(){
    const numUm = 5;
    const numDois = 3;
let resultado3 = (numUm * numDois);
window.alert("A multiplicação das duas variaveis é "+ resultado3);
}

function baba(){
    const numUm = 5;
    const numDois = 6;
    if (numUm > numDois) {
        window.alert("o numero maior é "+ numUm);
    } else {
        window.alert("o numero maior é "+ numDois);
    }

}

function susu(){
    var nome = document.getElementById('123').value;
    
    var salario = 0;
    var salario = parseInt(document.getElementById('456').value);
   
    
    console.log("nome: "+ nome);
    console.log("o seu bruto é: "+ salario);


    var liquido = salario;
    var por = 0

    if  (salario<= 1000){
        liquido = salario * 0.92
         por = 8
    } else if (salario>=1001 && salario<=1500){
        liquido = salario * 0.915 
        por = 8.5
    } else if(salario >1500){
        liquido = salario * 0.91 
        por = 9
    } 

    console.log("a sua porcentagen é: "+ por +" porcento");


    console.log("o seu salario liquido é: "+ liquido);
}







