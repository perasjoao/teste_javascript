class Calculadora{
    constructor(){
        this.display=document.getElementById("conta");
    }

    inicia(){
        this.cliqueBotoes();
        this.clicaEnter();
        

    }

    deletaDigito(){
        this.display.value=this.display.value.slice(0,-1);
    }

    clicaEnter(){
        document.addEventListener("keypress",(e)=>{
            console.log(e.key);
            if(e.key=="Enter"){
                console.log(this.display.value);
                this.fazConta();
                e.preventDefault();
            }
            if(e.key=="Backspace"){
                console.log(this.display.value);
                this.deletaDigito();
                e.preventDefault();
            }
        })
    }

    validaIput(){
        for(let i=0; i<this.display.value.length;i++){
            let operators=["+", "-" , "(", ")" , "*", "/"];

            if(operators.includes(this.display.value[i])){
                continue;
            }

            let n=parseInt(this.display.value[i]);

            if(Number.isNaN(n)){
                return false;
            }
            
            console.log(this.display.value[i]);
            
        }
        return true;
    }

    fazConta(){
        if(this.validaIput())
        this.display.value=eval(this.display.value);
    }

    executaBotao(e){
        console.log("executando");
        if(e.target.id=="delet"){
            console.log("deletando");
            this.display.value=this.display.value.slice(0,-1);
            return;
        }
        if(e.target.innerText=="="){
            this.fazConta();
            return;
        }
        if(e.target.className!="clear"){
            this.display.value=this.display.value+e.target.innerText;
            return;
        }
        this.display.value="";
    }

    cliqueBotoes(){
        document.addEventListener("click", (e)=>{
            console.log("clicando");
            if(e.target.tagName=="BUTTON"){
                this.executaBotao(e);
            }
        })
    }

}

let cal= new Calculadora();

cal.inicia();