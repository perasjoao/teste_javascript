class BlocoNotas{
    constructor(){
        this.caixa=document.getElementById("notas");
        this.apagar=document.getElementById("apagar");
        this.salvar=document.getElementById("salvar");
        this.salvos=document.getElementById("salvos");
        this.listaHistorico=document.getElementById("historico");
        this.voltarPrincipal;
        this.historico=[];
    }

    inicia(){
        this.iniciaButoes();
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

    iniciaSalvos(){
        if(this.salvos){
            this.salvos.addEventListener("click", () =>{
            console.log("cliquei");
            this.irParaSalvos();
        });
        }
    }

    iniciaButoes(){
        this.iniciaApagar();
        this.iniciaSalvar();
        this.iniciaSalvos();

    }

    salvaTexto(){
        let text=this.caixa.value;
        this.historico.push(text);
        let historicoJSON=JSON.stringify(this.historico);
        localStorage.setItem("ronaldo",historicoJSON);
    }

    apagaTexto(){
        console.log(this.caixa);
        this.caixa.value="";    
    }

    irParaSalvos(){
        let text=localStorage.getItem("ronaldo");
        let h=JSON.parse(text);
        console.log(h);
    }

}

let b=new BlocoNotas();
b.inicia();