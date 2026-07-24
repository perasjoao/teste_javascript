
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
            a.appendChild(li);
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