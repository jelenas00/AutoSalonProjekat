export class AutoPartneri{
    constructor(id,ime,godinaOsnivanja,sedisteFirme){
        this.id=id;
        if(ime)
        {
            this.ime=ime;
        }
        else{ime="Default";}
        if(godinaOsnivanja)
        {
            this.godinaOsnivanja=godinaOsnivanja;
        }
        else{godinaOsnivanja="Default";}
        if(sedisteFirme)
        {
            this.sedisteFirme=sedisteFirme;
        }
        else{
            sedisteFirme="Default";
        }

        this.listaAutomobila=[];
        this.autopartner=null;
    }

    crtajAutoPartnera(host){
        this.autopartner=document.createElement("div");
        this.autopartner.className="autopartner";
        host.appendChild(this.autopartner);

        let ime=document.createElement("h5");
        ime.className="imePartnera";
        ime.innerHTML=this.ime;
        this.autopartner.appendChild(ime);

        let godOsnivanja=document.createElement("p");
        godOsnivanja.innerHTML="Godina osnivanja: "+this.godinaOsnivanja;
        godOsnivanja.className="godOsnivanjaPartnera";
        this.autopartner.appendChild(godOsnivanja);

        let sediste=document.createElement("p");
        sediste.innerHTML="Sediste firme: "+this.sedisteFirme;
        sediste.className="sedisteFirme";
        this.autopartner.appendChild(sediste);

        

    }
}