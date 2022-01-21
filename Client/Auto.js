export class Auto{
    constructor(id,model,boja,godinaProizvodnje,cena,kubikaza,brojVrata,kolicina,karoserija,gorivo,snagaMotora)
    {
        this.id=id;
        this.model=model;
        this.boja=boja;
        this.godinaProizvodnje=godinaProizvodnje;
        this.cena=cena;
        this.kubikaza=kubikaza;
        this.brojVrata=brojVrata;
        this.kolicina=kolicina;
        this.karoserija=karoserija;
        this.gorivo=gorivo;
        this.snagaMotora=snagaMotora;
    }
    crtajAuto(tabelaBody){

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
        el.innerHTML=this.brojVrata;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.kolicina;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.karoserija;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.gorivo;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.snagaMotora;
        tr.appendChild(el);



    }
}