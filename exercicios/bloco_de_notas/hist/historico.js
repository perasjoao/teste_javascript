
class Historico{
    constructor(){
        this.display=document.getElementById("historico");
        this.historico=[];

    }

    retornaTextoSelecionado(t){
        console.log(t);
        let select = parseInt(t.slice(-1));
        console.log(this.historico[select]);
        localStorage.setItem("select", JSON.stringify(this.historico[select]));
    }
    removeDoBD(i){
        let t=localStorage.getItem("ronaldo");
        let h=JSON.parse(t);
        if(JSON.parse(localStorage.getItem("select"))==h[i]){
            localStorage.removeItem("select");
        }
        h.splice(i,i+1);
        t=JSON.stringify(h);
        localStorage.setItem("ronaldo",t);
    }


    apagaTexto(b){
        let li=b.parentElement.querySelector("li");
        console.log(li.innerHTML);
        let indice=li.innerHTML.slice(-1);
        console.log(indice);
        this.removeDoBD(indice);
        b.parentElement.remove();
    }
    
    criaBotao(){
        let b=document.createElement("button");
        b.innerHTML="Deletar do historico";
        b.addEventListener("click",(e) =>{
            e.stopPropagation();
            e.preventDefault();
            this.apagaTexto(e.target);
        })
        return b;
    }

    escreveHistorico(){
        for(let i=0; i<this.historico.length; i++){
            console.log(this.historico[i]);
            let li=document.createElement("li");
            li.innerHTML="texto "+i;
            let a=document.createElement("a");
            a.addEventListener("click",(e) =>{
                console.log("clickei");
                this.retornaTextoSelecionado(e.target.innerHTML);
            });
            a.href="../index.html";
            let b=this.criaBotao();
            a.appendChild(li);
            a.appendChild(b);
            this.display.appendChild(a);
        }
    }

    puxaHistorico(){
        this.historico=localStorage.getItem("ronaldo");
        this.historico=JSON.parse(this.historico);
        console.log(this.historico);
        this.escreveHistorico();
    }
}

let h=new Historico();

h.puxaHistorico();