//Exercicio 3:
//Faça um algoritimo para receber um número qualquer e informar na tela se é Par ou Impar.

// function parOuImpar(){
//     const n1 = parseFloat(document.getElementById("n1").value)

//     if(n1%2 == 0){
//         document.getElementById("showValue").innerHTML = (`O valor ${n1} e PAR`)
//         // n1  =''
//     }else{
//         document.getElementById("showValue").innerHTML = (`O valor ${n1} e IMPAR`)
//         // n1 = ''
//     }
// }

function verificar(){

    let txtValor = document.getElementById("txtValor").value

    if(txtValor ===""){
        txtValor = 0

        document.getElementById("showValue").innerHTML = ("Nenhum valor foi digitado, entao irei considerar 0")
    
    }else{
        txtValor = parseFloat(txtValor);
    }

    txtValor % 2 === 0 
    ? document.getElementById("showValue").innerHTML = (`${txtValor} é Par`)
    : document.getElementById("showValue").innerHTML = (`${txtValor} é Impar`)
}