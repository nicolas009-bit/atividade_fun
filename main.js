//FUNÇÃO 01

function mediaAluno(nome,nota1,nota2,nota3) {
    let media = (nota1 + nota2 + nota3) /3

    if(media >= 7){
        console.log(nome+ " esta aprovado com a media: " + media);
        
    }
    else{
        console.log(nome+ "esta reprovado com a media "+ media);
        
    }
}

//FUNÇÃO 02


function diferençaNumeros(numero1,numero2){
    let diferença 
    if(numero1>=numero2){
        diferença = numero1 - numero2
    }
    else if(numero2>numero1)
        diferença = numero2 - numero1

    else{
        console.log("esta errado, coloque um valor valido");
        
    }

    console.log("a diferença entre "+ numero1 +" e "+ numero2+" é "+diferença);
    
}





//FUNÇÃO 03

function tabuada(numero){
    let res
    for(let i=1;i<=10;i++){
        res = numero * i
        console.log(numero + " X "+i+" = "+ res);
        
        
    }
}


//FUNÇÃO 04

function classificarIdade(idade){
    if(idade < 12 && idade >=0 ){
        console.log("voce esta classificado como criança");
        
    }
    else if(idade >=12 && idade <= 17){
        console.log("voce esta classificado como adolescente");

        
    }
    else if(idade >=18 && idade<=59){
        console.log("voce esta classificado como adulto");
        
    }
    else if (idade>=60){
        console.log("voce esta classificado como idoso");
        
    }
    else{
        console.log("idade falada invalida");
        
    }
}


//FUNÇÃO 05

function calcularArea(base,altura){
    let area = base * altura
    console.log("a area do seu retangulo é "+ area+"cm²");
    
}



//FUNÇÃO 06

function contagemRegressiva(numero){

    for(let i=numero;i>=0;i = i-1){
        console.log(i);
        
    }
}