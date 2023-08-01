//faça um algoritimo que leia o nome, o sexo e o estado civil de uma pessoa
//Caso sexo seja "F" e estado civil seja CASADA, solicitar o tempo de casada (anos)
// const dados = ()=>{

//     const nome = prompt("Nome:")
//     // const sobreNome = prompt("SobreNome:")
//     const sexo = prompt("Sexo:")
//     const estadoCivil = prompt("Estado Civil:")
    
//     if(sexo ==="F" || sexo ==="f" && estadoCivil ==="casada"|| estadoCivil==="Casada"){
//         const tempoCasado = prompt("Tempo Casado: ")
//         alert(
//         `Nome: ${nome} \n`+
//         `Sexo: ${sexo}\n`+
//         `Estado Civil: ${estadoCivil}\n`+
//         `Tempo Casada: ${tempoCasado} anos`)
//     }
//     //  if(estadoCivil !="solteiro"|| estadoCivil !="Solteiro" ||estadoCivil !="solteira"|| estadoCivil !="Solteira" && sexo !="m" || sexo !="M" ||sexo !="f" || sexo !="f"){
//     //      alert("ERRO\nValor Invalido...\nTente Novamente")
//     //  dados()
            
//     // }
//     else{
//         alert(
//             `Nome: ${nome} \n`+
//             `Sexo: ${sexo}\n`+
//             `Estado Civil: ${estadoCivil}`)
//     }
    
// }
// dados()


function verifica(){
        const txtNome = document.getElementById('txtNome').value; 
        const slcSexo = document.getElementById('slcSexo').value; 
        const slcEstado = document.getElementById('slcEstado').value; 
    

    if(slcSexo ==="F" && slcEstado ==="C"){
        // const txtAnos = document.getElementById('show').style.display = "block"
        
        // toggle()
        exibe()
        // const txtAnos = parseInt(prompt("Você é casada a quantos anos?"))
        
    }else{
        document.getElementById("pExibe").innerHTML = (`${txtNome} você é ${slcEstado}`)
    }
    
}

// function toggle(){
//     const txtNome = document.getElementById('txtNome').value; 
//     const slcSexo = document.getElementById('slcSexo').value; 
//     const slcEstado = document.getElementById('slcEstado').value; 
    
//     if(slcEstado == "C" && slcSexo == "F"){
//     const txtAnos = document.getElementById('show').style.display = "block"
//     if(txtAnos !=''){
//         // document.getElementById('pExibe').innerHTML = ''
//         document.getElementById("pExibe").innerHTML = `${txtNome} você é ${slcEstado} fazem ${txtAnos} anos`
//     }
//     else{            
//         document.getElementById('pExibe').innerHTML = ''
//         alert("teste")
//         alert("Informe o tempo de casado")
//     }
//     }else{
//         document.getElementById("pExibe").innerHTML = (`${txtNome} você é ${slcEstado}`)
//     }
// }

function exibe(){
    // alert("rwar")
    const slcSexo = document.getElementById('slcSexo').value; 
    const slcEstado = document.getElementById('slcEstado').value;
    if(slcEstado =="C" && slcSexo=="F"){
        document.getElementById("lblAnos").style.display ="block"
        document.getElementById("txtAnos").style.display  ="block"
    }else{
        document.getElementById("lblAnos").style.display ="none"
        document.getElementById("txtAnos").style.display  ="none"

    }
}