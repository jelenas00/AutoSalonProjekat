export class Motor{
    constructor(id,model,boja,godinaProizvodnje,cena,kubikaza,dostupnost,tip){
        this.id=id;
        this.model=model;
        this.boja=boja;
        this.godinaProizvodnje=godinaProizvodnje;
        this.cena=cena;
        this.kubikaza=kubikaza;
        this.dostupnost=dostupnost;
        this.tip=tip;
    }

    crtajMotor(tabelaBody){

        let tr= document.createElement("tr");
        tr.className="trow";
        tabelaBody.appendChild(tr);

        let el=document.createElement("td");
        el.innerHTML=this.model;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.boja;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.godinaProizvodnje;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.cena;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.kubikaza;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.dostupnost;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.tip;
        tr.appendChild(el);



    }

    
}