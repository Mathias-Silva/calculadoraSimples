function ex01(){

    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    // let b = parseInt(prompt("Digite o Segundo valor"))
    // let c = parseInt(prompt("Digite o Terceiro valor"))
    if(a ===''||b ===''||c ===''){
        alert("Preencha todos os valores!")
    }else{
        a = parseFloat(a)
        b = parseFloat(b)
        c = parseFloat(c)
    
    
    
    let soma = a + b
   
    if(c > soma){
       
        document.getElementById("oResult").innerHTML =(`A soma de A = ${a} + B = ${b} e igual a ${soma}\n`+
        `${soma} é menor do que o valor de C ${c}`)
    }else if(c<soma){
        document.getElementById("oResult").innerHTML =(`A soma de  A = ${a} + B = ${b} e igual a ${soma}\n `+
        `${soma} é maior do que o valor de C ${c}`)
    }else if(c===soma){
       
        document.getElementById("oResult").innerHTML =(`A soma de  A = ${a} + B = ${b} e igual a ${soma}\n `+
        `${soma} é igual ao valor de C ${c}`)
    }

}
} 
// ex01()