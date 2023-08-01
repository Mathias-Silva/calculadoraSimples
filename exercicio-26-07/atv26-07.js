// Faça uma página que seja capz de ler um número e a operação e em seguida exiba a tabuada na forma
// 0 x n = 0
//1 x n = 1n
//...
//10 x n = 10n

function calc(){
    // const numeros = [1,2,3,4,5,6,7,8,9,10]
    let n1Value = document.getElementById('n1Value').value
    
    for(let n1 = 1;n1 <=10;n1++){
        if (n1Value ==0){
        alert(`ERRO o Valor ${n1Value} nao pode ser multiplicado\nDigite outro Número`)
        // document.body.removeChild(document.body.querySelector("div"))
        // clear()
        break;
    }
        let multi = n1 * n1Value 
        console.log(n1)
        let linha = document.createElement("li")
        pai = document.getElementsByTagName("ul")
        linha.innerHTML = (`${n1} x ${n1Value} = ${multi}`)
        pai[0].appendChild(linha)
        
        // n1 ++
    }
}
function limpar(){

    // alert("testers")
    // document.getElementById('show').remove()
    // document.body.removeChild(document.body.querySelectorAll("ul")[0])
    let apagar = document.getElementsByTagName("li")

    for(let i = 0;apagar.length > i;i++){
        
        document.getElementsByTagName("ul")[0].removeChild(apagar[i])
       
    }

}