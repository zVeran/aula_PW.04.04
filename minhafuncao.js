function carrega(){
let n1 = prompt("informe um número: ")
verifica(n1, 0, 1 );
}
function verifica(x, y, t){
try{
    if(x<0){
        throw("erro1");
    }
    else if(isNaN(parseFloat(x))){
        throw("erro2");
    }
    else{
        if( t == 1 ){
            y = x; 
            carrega2(y);
        }
        else{
            let x1 = parseFloat(x);
            let y1 = parseFloat(y);
            x = x.replace(",", ".");
            y = y.replace(",", ".");

            document.write(y1+x1);
        }
    }
}    
catch(e){
    if(e == "erro1"){
        alert("Favor informar número positivo apenas. \n Para reiniciar, pressionar F5")
    }
    if(e == "erro2"){
        alert("Favor inserir apenas valores numéricos. \n Para reiniciar, pressione F5")
    }
}

}

function carrega2(y){
    let n2 = prompt("Informe um segundo número")
    verifica (n2, y, 2);
}