
class Usuario{
    constructor(peso, altura){
        this.altura=altura;
        this.peso=peso;
    }
    calcula_imc(){
        return this.peso/(Math.pow(this.altura,2));
    }
}

function main(){
    let pessoa= new Usuario();
    let input_peso=document.getElementById("peso");
    let input_altura=document.getElementById("altura");
    let buttom=document.getElementById("calcula_imc");
    buttom.addEventListener("click", function(){
        pessoa.peso=parseFloat(input_peso.value);
        pessoa.altura=parseFloat(input_altura.value);
        if(Number.isNaN(pessoa.altura)|| Number.isNaN(pessoa.peso)){
            document.getElementById("resposta").innerHTML="Respota invalida";
            document.getElementById("resposta").style.backgroundColor="red";
        }
        else{
            document.getElementById("resposta").innerHTML=`Seu IMC é de ${pessoa.calcula_imc().toFixed(2)}`;
            document.getElementById("resposta").style.backgroundColor="green";
        }
    })

}




main();