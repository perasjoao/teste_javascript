class  Carro{
    constructor(modelo, preco){
        this.modelo=modelo;
        this.preco=preco;
    }
}

function escreveTela(lista,carro){
    lista.push(carro);
    let p=document.createElement("p");
    p.innerHTML=`Modelo: ${carro.modelo} | Preço: ${carro.preco}`;
    let div=document.getElementById("caixa1");
    div.appendChild(p);
    console.log(lista);
}

function escreveMaximo(lista){
    let div=document.getElementById("maisCaro");
    div.innerHTML='';
    let h1=document.createElement('h1');
    let p=document.createElement('p');
    h1.innerHTML="Carro mais caro";
    let max=0;
    let maisCaro;
    for(let i=0; i<lista.length; i++){
        if(lista[i].preco>max){
            max=lista[i].preco;
            maisCaro=lista[i];
        }
    }
    p.innerHTML=`${maisCaro.modelo} custando ${maisCaro.preco}`;
    div.appendChild(h1);
    div.appendChild(p);

}

function cria_objeto(nome,preco){
    let c= new Carro(nome,preco);
    return c;
}

function main(){
    let input_nome;
    let input_preco;
    let buttom;
    let lista=[];
    lista.push(2);
        buttom=document.getElementById("lista_carro");
        buttom.addEventListener("click", function(){
            input_nome=document.getElementById("nomeCarro");
            input_preco=document.getElementById("precoCarro");
            if(!input_nome.value || !input_nome.value){
                return;
            }
            let carro=cria_objeto(input_nome.value,parseFloat(input_preco.value));
            escreveTela(lista,carro);
            escreveMaximo(lista);
        })
}





main();