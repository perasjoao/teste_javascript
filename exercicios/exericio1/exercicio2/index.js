
function escreve_tela(horas,minutos,segundos){
    let contador=document.getElementById("contador");
    contador.innerHTML=`${Math.trunc(horas/10)}${horas%10}:${Math.trunc(minutos/10)}${minutos%10}:${Math.trunc(segundos/10)}${segundos%10}`;
}

function contador(cont){
    console.log(cont);
    cont++;
    let segundos=cont%60;
    let minutos = parseInt((cont/60)%60);
    let horas = parseInt((cont/3600)%60);
    console.log(horas,minutos,segundos);
    escreve_tela(horas,minutos,segundos);
}


function inicia_contagem(cronometro,para, flag){
    let cont=0;
    if(flag.ativo){
        para_contagem(cronometro,flag);
        cont=-1;
    }
    flag.ativo=true;
    cronometro.guardaIntervalo=setInterval(function(){
        contador(cont);
        cont++;
    },1000)
}

function para_contagem(cronometro, flag){
    clearInterval(cronometro.guardaIntervalo);
    flag.ativo=false;
}

function main(){
let cronometro={
    guardaIntervalo:0,
};
let flag={
    ativo:false
};
let iniciar=document.getElementById("inicia");
let para=document.getElementById("para");
para.addEventListener("click",function(){console.log("click identificado para parar");para_contagem(cronometro, flag)});
    iniciar.addEventListener("click", function(){
        console.log("click identificado para inicar");
        inicia_contagem(cronometro,para,flag);
    });
}

main();