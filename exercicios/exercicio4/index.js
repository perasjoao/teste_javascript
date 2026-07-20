
function escreveClick(clicks){
    let h2=document.querySelector(".clicks");
    h2.innerHTML="CLICKS: "+clicks.clicks;
}


function contaClick(clicks){
    clicks.clicks++;
    escreveClick(clicks);
    console.log(clicks.clicks);
}

function escreveTimer(timer){
    timer.tempo++;
    text="TIMER: "+(timer.tempo).toFixed(3)+"s";
    let t=document.getElementById("timer");
    t.innerText=text;
}

function escreveHistorico(clicks){
    let ul=document.getElementById("historico");
    let li=document.createElement("li");
    li.innerHTML=clicks.clicks/5;
    ul.appendChild(li);
}

function atualizaCps(flag,clicks,timer){
    if(clicks.clicks > clicks.max){
        clicks.max=clicks.clicks;
    }
    let clicksAtual=document.getElementById("clicksAtual");
    let clicksMax=document.getElementById("clicksMax");
    clicksAtual.innerHTML="CPS ATUAL: "+clicks.clicks/5;
    clicksMax.innerHTML="CPS MAXIMA: "+clicks.max/5;
    flag.ativo=false;
    escreveHistorico(clicks);
    clicks.clicks=0;
    escreveClick(clicks);
    timer.tempo=-1;
    escreveTimer(timer);
}

function timerInit(flag,clicks){
    let timer={
        tempo:0,
        interval:0
    };
    timer.interval=setInterval(function(){
        if(timer.tempo==5){
            clearInterval(timer.interval);
            atualizaCps(flag,clicks,timer);
            return;
        }
        escreveTimer(timer);
    },1000);

}

function main(){
let clicks={
    clicks:0,
    max:0
};

let flag={
    ativo:false
};
let caixaClikc=document.getElementById("conta_cps");
    caixaClikc.addEventListener("click",function(e){
        if(flag.ativo==false){
            flag.ativo=true;
            timerInit(flag,clicks);
        }
        console.log("clickou");
        contaClick(clicks);
    })



}
main();