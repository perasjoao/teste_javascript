
function contaClick(clicks){
    clicks.clicks++;
    console.log(clicks.clicks);
}

function timer(){

}

function main(){
let clicks={
    clicks:0,
    max:0
};
let caixaClikc=document.getElementById("conta_cps");
    caixaClikc.addEventListener("click",function(e){
        console.log("clickou");
        contaClick(clicks);
    })



}
main();