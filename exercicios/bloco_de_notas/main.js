class BlocoNotas{
    constructor(){
        this.caixa=document.getElementById("notas");
        this.apagar=document.getElementById("apagar");
        this.salvar=document.getElementById("salvar");
        this.listaHistorico=document.getElementById("historico");
    }

    inicia(){
        this.iniciaButoes();
        this.verificaStorage();
    }

    verificaStorage(){
        if(!localStorage.length){
            return;
        }
        console.log("verificando");
        let t=localStorage.getItem("select");
        console.log(t);
        t=JSON.parse(t);
        this.caixa.value=t;
    }


    iniciaApagar(){
        if(this.apagar){
            this.apagar.addEventListener("click",() =>{
            console.log("cliquei");
            this.apagaTexto();
        });
        }
    }

    iniciaSalvar(){
        if(this.salvar){
            this.salvar.addEventListener("click", ()=>{
            console.log("cliquei");
            this.salvaTexto();
        });
        }
    }

    iniciaButoes(){
        this.iniciaApagar();
        this.iniciaSalvar();
    }

    preencheHistorico(historico){
        if(localStorage.length!=0){
            let t=localStorage.getItem("ronaldo");
            historico=JSON.parse(t);
            console.log( "resgatado",historico);
            return historico;
        }
    }


    salvaTexto(){
        let text=this.caixa.value;
        console.log("salvando", text);
        let historico=[];
        historico=this.preencheHistorico(historico);
        console.log("esse é meu historico",historico);
        historico.push(text);
        let historicoJSON=JSON.stringify(historico);
        localStorage.setItem("ronaldo",historicoJSON);
        console.log(historicoJSON);
    }

    apagaTexto(){
        console.log(this.caixa);
        this.caixa.value="";    
    }
}

let b=new BlocoNotas();
b.inicia();