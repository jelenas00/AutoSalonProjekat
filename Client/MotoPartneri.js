export class MotoPartneri{
    constructor(
        id,ime,godinaOsnivanja,sedisteFirme){
        this.id=id;
        if(ime){
            this.ime=ime;
        }
        else{
            ime="Def";
        }
        if(godinaOsnivanja)
        {
            this.godinaOsnivanja=godinaOsnivanja;
        }
        else{
            godinaOsnivanja=0;
        }
        if(sedisteFirme){
            this.sedisteFirme=sedisteFirme;
        }
        else{
            sedisteFirme="Unknown";
        }
        this.listaMotora=[];
        this.motopartner=null;
    }

    crtajMotoPartnera(host){
        this.motopartner=document.createElement("div");
        this.motopartner.className="motopartner";
        host.appendChild(this.motopartner);

        let ime=document.createElement("h5");
        ime.className="imePartnera";
        ime.innerHTML=this.ime;
        this.motopartner.appendChild(ime);

        let godOsnivanja=document.createElement("p");
        godOsnivanja.innerHTML="Godina osnivanja: "+this.godinaOsnivanja;
        godOsnivanja.className="godOsnivanjaPartnera";
        this.motopartner.appendChild(godOsnivanja);

        let sediste=document.createElement("p");
        sediste.innerHTML="Sediste firme: "+this.sedisteFirme;
        sediste.className="sedisteFirme";
        this.motopartner.appendChild(sediste);

    }
}