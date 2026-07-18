
function criaP(entrada){
    let p=document.createElement("p");
    p.innerHTML=entrada;
    p.style.margin="10%";
    p.style.whiteSpace = "nowrap";
    return p;
}

function criaB(buttons,paragrafos){
    let b=document.createElement("button");
    b.innerText="apagar";
    b.className="apagar";
    adiciona_escutador(buttons,b,paragrafos);
    return b;
}

function criaDiv(p,b){
    let div=document.createElement("div");
    div.id="item";
    div.appendChild(p);
    div.appendChild(b);
    estilizaDiv(div);
    return div;
}

function estilizaDiv(div){
    div.style.display="flex";
    div.style.justifyContent="center";
    div.style.alignItems="center";
    div.style.marginRight="auto";
}

function capturaDiv(){
    return document.getElementById("caixa_lista");
}

function escreveTela(entrada, buttons,paragrafos){
    let b=criaB(buttons,paragrafos);
    let p=criaP(entrada);
    let div=criaDiv(p,b);
    let caixa=capturaDiv();
    caixa.appendChild(div);
}

function verifica_botao(e, buttons,paragrafos){
    for(let i=0; i<buttons.length; i++){
        if(buttons[i].id=="listar"){
            continue;
        }
        if(buttons[i]==e.target){
            paragrafos[i].remove();
            buttons[i].remove();
        }
    }
}

function adiciona_escutador(buttons,b,paragrafos){
        console.log("adcionando escutador");
        b.addEventListener("click",function(e){
            console.log("clickou em apagar");
            verifica_botao(e,buttons,paragrafos);

        });
}

function main(){
let lista=[];
let entrada=document.getElementById("itens");
let listar=document.getElementById("listar");



let buttons=document.getElementsByClassName("apagar");
let paragrafos=document.getElementsByTagName("p");
let caixa=document.getElementById("caixa_itens");

    listar.addEventListener("click",function(){
        console.log("click identificado")
        let input=entrada.value;
        if(!input.length){
            return;
        }
        lista.push(input);
        escreveTela(input,buttons,paragrafos);
    })
}


main();