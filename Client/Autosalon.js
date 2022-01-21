import { AutoPartneri } from "./AutoPartneri.js";
import { MotoPartneri } from "./MotoPartneri.js";
import { Motor } from "./Motor.js";
import { Auto } from "./Auto.js";
import { Klijent } from "./Klijent.js";


export class AutoSalon{
        constructor(naziv){
            if(naziv)
            {
                this.naziv=naziv;
            }
            else{
                naziv="Default";
            }
            this.listaAutoPartnera=[];
            this.listaMotoPartnera=[];
            this.listaKlijenata=[];
            this.container=null;
        }

    dodajAutoPartnera(apartner){
        this.listaAutoPartnera.push(apartner);
    }

    dodajMotoPartnera(mpartner)
    {
        this.listaMotoPartnera.push(mpartner);
    }
    crtajSelektMoto(host){
        let selekt= document.createElement("select");
        selekt.className="selektMoto";
        host.appendChild(selekt);


        this.listaMotoPartnera.forEach((moto)=>{
            let opcija=document.createElement("option");
            opcija.className="opcijaMoto";
            opcija.innerHTML=moto.ime;
            opcija.value=moto.id;
            selekt.appendChild(opcija);
    });
        
    }
    crtajSelektAuta(host){
        let selekt= document.createElement("select");
        selekt.className="selektAuto";
        host.appendChild(selekt);

        this.listaAutoPartnera.forEach((auto)=>{
            let opcija=document.createElement("option");
            opcija.className="opcijaAuta";
            opcija.innerHTML=auto.ime;
            opcija.value=auto.id;
            selekt.appendChild(opcija);
    });
        
    }

    crtajSalon(host){
        
        this.nabaviSveMotoPartnere();
        this.nabaviSveAutoPartnere();
        this.container=document.createElement("div");
        this.container.className="glavniKontejner";
        host.appendChild(this.container);

        let header= document.createElement("div");
        header.className="header";
        this.container.appendChild(header);

        let body=document.createElement("div");
        body.className="bodySalon";
        this.container.appendChild(body);

        let logoIme= document.createElement("h1");
        logoIme.className="logoIme";
        logoIme.innerHTML="LUX";
        header.appendChild(logoIme);

        let autoPartneriButton=document.createElement("button");
        autoPartneriButton.innerHTML="Auto partneri";
        autoPartneriButton.className="headerButton";
        header.appendChild(autoPartneriButton);
        autoPartneriButton.onclick=(ev)=>this.AutoPartneri(body);

        let motoPartneriButton=document.createElement("button");
        motoPartneriButton.innerHTML="Moto partneri";
        motoPartneriButton.className="headerButton";
        header.appendChild(motoPartneriButton);
        motoPartneriButton.onclick=(ev)=>this.MotoPartneri(body);

        let automobiliButton=document.createElement("button");
        automobiliButton.className="headerButton";
        automobiliButton.innerHTML="Automobili";
        header.appendChild(automobiliButton);
        automobiliButton.onclick=(ev)=>this.Auto(body);
       
        let motoriButton= document.createElement("button");
        motoriButton.className="headerButton";
        motoriButton.innerHTML="Motori";
        header.appendChild(motoriButton);
        motoriButton.onclick=(ev)=>this.Motori(body);

        let klijentButtons=document.createElement("div");
        klijentButtons.className="klijentButtons";
        header.appendChild(klijentButtons);
        
        let logIn=document.createElement("button");
        logIn.innerHTML="Log in";
        logIn.className="headerButton";
        klijentButtons.appendChild(logIn);
        logIn.onclick=(ev)=>this.logIn(body);

        let signUp=document.createElement("button");
        signUp.innerHTML="Sign up";
        signUp.className="headerButton";
        klijentButtons.appendChild(signUp);
        signUp.onclick=(ev)=>this.signUp(body);

    }
    brisiSadrzaj2(){
        var obrisi=document.querySelector(".bodyZaCrtanjePartnera");
        if(obrisi)
        {var roditelj= obrisi.parentNode;
        roditelj.removeChild(obrisi);
        }
        var obrisi=document.querySelector(".bodyZaCrtanjeVozila");
        if(obrisi)
        {var roditelj= obrisi.parentNode;
        roditelj.removeChild(obrisi);
        }
        var obrisi=document.querySelector(".bodyZaCrtanjeKlijenta");
        if(obrisi)
        {var roditelj= obrisi.parentNode;
        roditelj.removeChild(obrisi);
        }
        var obrisi=document.querySelector(".prikazKlijent");
        if(obrisi)
        {var roditelj= obrisi.parentNode;
        roditelj.removeChild(obrisi);
        }
    }
    brisiPartnereDeo(){
        let dete=document.querySelector(".partnerideo");
        if(dete){
            let roditelj=dete.parentNode;
            roditelj.removeChild(dete);
        }
    }
    AutoPartneri(body){
        
        this.brisiSadrzaj2();

        let bodyZaCrtanje=document.createElement("div");
        bodyZaCrtanje.className="bodyZaCrtanjePartnera";
        body.appendChild(bodyZaCrtanje);

        let dugmici= document.createElement("div");
        dugmici.className="dugmiciPartneri";
        bodyZaCrtanje.appendChild(dugmici);

        let dodajDugmeSve=document.createElement("button");
        dodajDugmeSve.className="dodajDugme";
        dodajDugmeSve.innerHTML="Prikazi sve partnere";
        dugmici.appendChild(dodajDugmeSve);

        dodajDugmeSve.onclick=(ev)=>this.crtajSveAutoPartnere(bodyZaCrtanje);

        this.crtajSelektAuta(dugmici);

        let dodajDugme=document.createElement("button");
        dodajDugme.className="dodajDugme";
        dodajDugme.innerHTML="Prikazi odabranog";
        dugmici.appendChild(dodajDugme);

        dodajDugme.onclick=(ev)=>this.cratajOdabranogAutoPartnera(bodyZaCrtanje);

        
    }
    cratajOdabranogAutoPartnera(host){

        this.brisiPartnereDeo();

        let partnerideo= document.createElement("div");
        partnerideo.className="partnerideo";
        host.appendChild(partnerideo); 

        let index=this.container.querySelector(".selektAuto").value;
        this.listaAutoPartnera[index-1].crtajAutoPartnera(partnerideo);
    }

    crtajSveAutoPartnere(host){
        this.brisiPartnereDeo();
        let partnerideo= document.createElement("div");
        partnerideo.className="partnerideo";
        host.appendChild(partnerideo); 
        this.listaAutoPartnera.forEach(p=>p.crtajAutoPartnera(partnerideo));
    }
    nabaviSveAutoPartnere(){
        fetch("https://localhost:5001/AutoPartner/PrikaziPartnere",{method:"GET"})
        .then(response=>response.json())
        .then(autoPartneri=>{
            autoPartneri.forEach(part=>{
                let p=new AutoPartneri(part.id,part.ime,part.godinaOsnivanja,part.sedisteFirme);
                this.dodajAutoPartnera(p);
            })
        });
    }
    

    MotoPartneri(body){

        this.brisiSadrzaj2();

        let bodyZaCrtanje=document.createElement("div");
        bodyZaCrtanje.className="bodyZaCrtanjePartnera";
        body.appendChild(bodyZaCrtanje);
        
        let dugmici= document.createElement("div");
        dugmici.className="dugmiciPartneri";
        bodyZaCrtanje.appendChild(dugmici);

        let dodajDugmeSve=document.createElement("button");
        dodajDugmeSve.className="dodajDugme";
        dodajDugmeSve.innerHTML="Prikazi sve partnere";
        dugmici.appendChild(dodajDugmeSve);
        dodajDugmeSve.onclick=(ev)=>this.crtajSveMotoPartnere(bodyZaCrtanje);

        this.crtajSelektMoto(dugmici);

        let dodajDugme=document.createElement("button");
        dodajDugme.className="dodajDugme";
        dodajDugme.innerHTML="Prikazi odabranog";
        dugmici.appendChild(dodajDugme);

        dodajDugme.onclick=(ev)=>this.cratajOdabranogMotoPartnera(bodyZaCrtanje);
    }
    cratajOdabranogMotoPartnera(host){

        this.brisiPartnereDeo();

        let partnerideo= document.createElement("div");
        partnerideo.className="partnerideo";
        host.appendChild(partnerideo); 

        let index=this.container.querySelector(".selektMoto").value;
        console.log(index);
        this.listaMotoPartnera[index-1].crtajMotoPartnera(partnerideo);
    }

    crtajSveMotoPartnere(host){
        this.brisiPartnereDeo();
        let partnerideo= document.createElement("div");
        partnerideo.className="partnerideo";
        host.appendChild(partnerideo); 
        this.listaMotoPartnera.forEach(p=>p.crtajMotoPartnera(partnerideo))
    }
    
    nabaviSveMotoPartnere(){
        fetch("https://localhost:5001/MotoPartner/PrikaziPartnere",{method:"GET"})
        .then(response=>response.json())
        .then(motoPartner=>{
            motoPartner.forEach(part=>{
                let p= new MotoPartneri(part.id,part.ime,part.godinaOsnivanja,part.sedisteFirme);
                this.dodajMotoPartnera(p);
            })
        });
    }

    Auto(host){
        this.brisiSadrzaj2();
        
        let bodyZaCrtanje=document.createElement("div");
        bodyZaCrtanje.className="bodyZaCrtanjeVozila";
        host.appendChild(bodyZaCrtanje);

        let selektDiv=document.createElement("div");
        selektDiv.className="selektDiv";
        bodyZaCrtanje.appendChild(selektDiv);

        let dugme=document.createElement("button")
        dugme.innerHTML="Prikazi";
        dugme.className="dugmiciVozila";
        selektDiv.appendChild(dugme);

        this.crtajSelektAuta(selektDiv);

        dugme.onclick=(ev)=>this.prikaziAutomobile(bodyZaCrtanje);
    }

    prikaziAutomobile(bodyZaCrtanje){
        this.brisiTabelu();

        let divTabela= document.createElement("div");
        divTabela.className="divTabela";
        bodyZaCrtanje.appendChild(divTabela);

        let tabelaVozila= document.createElement("table");
        tabelaVozila.className="tabelaVozila";
        divTabela.appendChild(tabelaVozila);

        let tabelaHead=document.createElement("thead");
        tabelaHead.className="tabelaHead";
        tabelaVozila.appendChild(tabelaHead);

        let tr= document.createElement("tr");
        tabelaHead.appendChild(tr);

        let tabelaBody=  document.createElement("tbody");
        tabelaBody.className="tabelBody";
        tabelaVozila.appendChild(tabelaBody);

        let th;
        let zaglavlje=["Model","Boja","Godina proizvodnje","Cena","Tezina","Broj Vrata","Dostupno","Karoserija","Gorivo","Snaga motora"];
        zaglavlje.forEach(el=>{
            th=document.createElement("th");
            th.innerHTML=el;
            tr.appendChild(th);
        });
        
        let index=this.container.querySelector(".selektAuto").value;
        fetch("https://localhost:5001/Automobil/PrikaziAutomobile/"+index,{method:"GET"})
        .then(response=>{
            if(response.ok){
                response.json().then(automobili=>{
                    automobili.forEach(auto=>{
                        let a= new Auto(auto.id,auto.model,auto.boja,auto.godinaProizvodnje,auto.cena,auto.kubikaza,auto.brojVrata,auto.kolicina,auto.karoserija,auto.gorivo,auto.snagaMotora);
                        a.crtajAuto(tabelaBody);
                    })
                })
            }
        });
    }

    Motori(host){
        this.brisiSadrzaj2();
        
        let bodyZaCrtanje=document.createElement("div");
        bodyZaCrtanje.className="bodyZaCrtanjeVozila";
        host.appendChild(bodyZaCrtanje);

        let selektDiv=document.createElement("div");
        selektDiv.className="selektDiv";
        bodyZaCrtanje.appendChild(selektDiv);

        let dugme=document.createElement("button")
        dugme.innerHTML="Prikazi";
        dugme.className="dugmiciVozila";
        selektDiv.appendChild(dugme);
        
        this.crtajSelektMoto(selektDiv);

       
        dugme.onclick=(ev)=>this.prikaziMotore(bodyZaCrtanje);
        
    }
    prikaziMotore(bodyZaCrtanje){
        this.brisiTabelu();

        let divTabela= document.createElement("div");
        divTabela.className="divTabela";
        bodyZaCrtanje.appendChild(divTabela);

        let tabelaVozila= document.createElement("table");
        tabelaVozila.className="tabelaVozila";
        divTabela.appendChild(tabelaVozila);

        let tabelaHead=document.createElement("thead");
        tabelaHead.className="tabelaHead";
        tabelaVozila.appendChild(tabelaHead);

        let tr= document.createElement("tr");
        tabelaHead.appendChild(tr);

        let tabelaBody=  document.createElement("tbody");
        tabelaBody.className="tabelBody";
        tabelaVozila.appendChild(tabelaBody);

        let th;
        let zaglavlje=["Model","Boja","Godina proizvodnje","Cena","Tezina","Dostupnost","Tip"];
        zaglavlje.forEach(el=>{
            th=document.createElement("th");
            th.innerHTML=el;
            tr.appendChild(th);
        });
        let index=this.container.querySelector(".selektMoto").value;
        fetch("https://localhost:5001/Motor/PrikaziMotore/"+index,{method:"GET"})
        .then(response=>{
            if(response.ok){
                response.json().then(motori=>{
                    motori.forEach(motor=>{
                        let m= new Motor(motor.id,motor.model,motor.boja,motor.godinaProizvodnje,motor.cena,motor.kubikaza,motor.dostupnost,motor.tip);
                        m.crtajMotor(tabelaBody);
                    })
                })
            }

        });
    }
    brisiTabelu(){
        let dete=document.querySelector(".divTabela");
        if(dete)
        {
            let roditelj=dete.parentNode;
            roditelj.removeChild(dete);
        }
    }
    
    signUp(host){
        this.brisiSadrzaj2();

        let bodyZaCrtanje=document.createElement("div");
        bodyZaCrtanje.className="bodyZaCrtanjeKlijenta";
        host.appendChild(bodyZaCrtanje);

        let forma=document.createElement("div");
        forma.className="formaKlijent";
        bodyZaCrtanje.appendChild(forma);

        let dugmiciKlijent=document.createElement("div")
        bodyZaCrtanje.appendChild(dugmiciKlijent);

        let dodajKlij=document.createElement("button");
        dodajKlij.innerHTML="Kreiraj nalog";
        dodajKlij.className="dodajKlijenta"
        bodyZaCrtanje.appendChild(dodajKlij);

        let divIme=document.createElement("div");
        divIme.className="divSign";
        forma.appendChild(divIme);

        let labelaIme=document.createElement("label");
        labelaIme.className="inputLabela";
        labelaIme.innerHTML="Ime";
        divIme.appendChild(labelaIme);

        let inputIme= document.createElement("input");
        inputIme.className="inputEl";
        inputIme.type="string";
        divIme.appendChild(inputIme);

        let divPrezime=document.createElement("div");
        divPrezime.className="divSign";
        forma.appendChild(divPrezime);

        let labelaPrezime=document.createElement("label");
        labelaPrezime.className="inputLabela";
        labelaPrezime.innerHTML="Prezime";
        divPrezime.appendChild(labelaPrezime);

        let inputPrezime= document.createElement("input");
        inputPrezime.className="inputEl";
        inputPrezime.type="string";
        divPrezime.appendChild(inputPrezime);

        let divJMBG=document.createElement("div");
        divJMBG.className="divSign";
        forma.appendChild(divJMBG);

        let labelaJMBG=document.createElement("label");
        labelaJMBG.className="inputLabela";
        labelaJMBG.innerHTML="JMBG";
        divJMBG.appendChild(labelaJMBG);

        let inputJMBG= document.createElement("input");
        inputJMBG.className="inputEl";
        inputJMBG.type="int";
        divJMBG.appendChild(inputJMBG);

        let divBrojLK=document.createElement("div");
        divBrojLK.className="divSign";
        forma.appendChild(divBrojLK);

        let labelaBrojLK=document.createElement("label");
        labelaBrojLK.className="inputLabela";
        labelaBrojLK.innerHTML="Broj licne karte";
        divBrojLK.appendChild(labelaBrojLK);

        let inputBrojLK= document.createElement("input");
        inputBrojLK.className="inputEl";
        inputBrojLK.type="int";
        divBrojLK.appendChild(inputBrojLK);

        let divAdresa=document.createElement("div");
        divAdresa.className="divSign";
        forma.appendChild(divAdresa);

        let labelaAdresa=document.createElement("label");
        labelaAdresa.className="inputLabela";
        labelaAdresa.innerHTML="Adresa";
        divAdresa.appendChild(labelaAdresa);

        let inputAdresa= document.createElement("input");
        inputAdresa.className="inputEl";
        inputAdresa.type="string";
        divAdresa.appendChild(inputAdresa);

        let divMail=document.createElement("div");
        divMail.className="divSign";
        forma.appendChild(divMail);

        let labelaMail=document.createElement("label");
        labelaMail.className="inputLabela";
        labelaMail.innerHTML="Email";
        divMail.appendChild(labelaMail);

        let inputMail= document.createElement("input");
        inputMail.className="inputEl";
        inputMail.type="email";
        divMail.appendChild(inputMail);

        let divPass=document.createElement("div");
        divPass.className="divSign";
        forma.appendChild(divPass);

        let labelaPass=document.createElement("label");
        labelaPass.className="inputLabela";
        labelaPass.innerHTML="Password";
        divPass.appendChild(labelaPass);

        let inputPass= document.createElement("input");
        inputPass.className="inputEl";
        inputPass.type="password";
        divPass.appendChild(inputPass);

        let divRePass=document.createElement("div");
        divRePass.className="divSign";
        forma.appendChild(divRePass);

        let labelaRePass=document.createElement("label");
        labelaRePass.className="inputLabela";
        labelaRePass.innerHTML="Repeat password";
        divRePass.appendChild(labelaRePass);

        let inputRePass= document.createElement("input");
        inputRePass.className="inputEl";
        inputRePass.type="password";
        divRePass.appendChild(inputRePass);

        dodajKlij.onclick=(ev)=>this.dodajKlijenta(inputIme.value,inputPrezime.value,inputJMBG.value,inputBrojLK.value,inputAdresa.value,inputMail.value,inputPass.value,inputRePass.value);
        
    }
    logIn(host){
        this.brisiSadrzaj2();

        let bodyZaCrtanje=document.createElement("div");
        bodyZaCrtanje.className="bodyZaCrtanjeKlijenta";
        host.appendChild(bodyZaCrtanje);

        let forma=document.createElement("div");
        forma.className="formaKlijent";
        bodyZaCrtanje.appendChild(forma);

        let dugmiciKlijent=document.createElement("div")
        bodyZaCrtanje.appendChild(dugmiciKlijent);

        let nadjiKlij=document.createElement("button");
        nadjiKlij.innerHTML="Log in";
        nadjiKlij.className="dodajKlijenta";
        bodyZaCrtanje.appendChild(nadjiKlij);

        let divMail=document.createElement("div");
        divMail.className="divSign";
        forma.appendChild(divMail);

        let labelaMail=document.createElement("label");
        labelaMail.className="inputLabela";
        labelaMail.innerHTML="Email";
        divMail.appendChild(labelaMail);

        let inputMail= document.createElement("input");
        inputMail.className="inputEl";
        inputMail.type="email";
        divMail.appendChild(inputMail);

        let divPass=document.createElement("div");
        divPass.className="divSign";
        forma.appendChild(divPass);

        let labelaPass=document.createElement("label");
        labelaPass.className="inputLabela";
        labelaPass.innerHTML="Password";
        divPass.appendChild(labelaPass);

        let inputPass= document.createElement("input");
        inputPass.className="inputEl";
        inputPass.type="password";
        divPass.appendChild(inputPass);

        nadjiKlij.onclick=(ev)=>this.nadjiKlijenta(inputMail.value,inputPass.value,host);
    }

    dodajKlijenta(ime,prezime,jmbg,brlk,adresa,email,password,repass){
        if(password!=repass)
        alert("Lozinke se ne poklapaju");
        let klijent=new Klijent(ime,prezime,jmbg,brlk,adresa,email,password);
        fetch("https://localhost:5001/Klijent/DodajKlijenta",{method:"POST",headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(klijent)})
          .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            });
        
    }

    nadjiKlijenta(email,pass,host){
        fetch("https://localhost:5001/Klijent/NadjiKlijenta/"+email+"/"+pass,{method:"GET"})
        .then(klijent=>{
            this.brisiSadrzaj2();
            if(klijent.ok){
                klijent.json().then(klij=>{
                    let k=new Klijent(klij.ime,klij.prezime,klij.jmbg,klij.brojLicneKarte,klij.adresa,klij.email,klij.password);
                    console.log(k);
                    this.prikaziKlijenta(host,k);
                })
            }
            else{
                alert("Neispravna lozinka ili mail!");
            }
        })
    }
    prikaziKlijenta(host,kl){
        let klijent=document.createElement("div");
        klijent.className="prikazKlijent";
        host.appendChild(klijent);

        let bodyKlijenta=document.createElement("div");
        bodyKlijenta.className="bodyKlijenta";
        klijent.appendChild(bodyKlijenta);

        let dugmiciKlijent=document.createElement("div");
        dugmiciKlijent.className="prikazKlijentDugmici";
        klijent.appendChild(dugmiciKlijent);

        let dugmeUpdate=document.createElement("button");
        dugmeUpdate.innerHTML="Promeni lozinku";
        dugmeUpdate.className="klijentDugme";
        dugmiciKlijent.appendChild(dugmeUpdate);
        dugmeUpdate.onclick=(ev)=>this.klijentUpdate(host);

        let dugmeDelete=document.createElement("button");
        dugmeDelete.innerHTML="Obrisi nalog";
        dugmeDelete.className="klijentDugme";
        dugmiciKlijent.appendChild(dugmeDelete);
        dugmeDelete.onclick=(ev)=>this.klijentDelete(kl.email,kl.password);

        let divIme=document.createElement("div");
        divIme.className="klijentDiv";
        bodyKlijenta.appendChild(divIme);

        let labelaIme=document.createElement("label");
        labelaIme.innerHTML="Ime: ";
        labelaIme.className="labeleKlijent";
        divIme.appendChild(labelaIme);

        let labelaImeKlijenta=document.createElement("label");
        labelaImeKlijenta.innerHTML=kl.ime;
        labelaImeKlijenta.className="labeleKlijent";
        divIme.appendChild(labelaImeKlijenta);

        let divPrezime=document.createElement("div");
        divPrezime.className="klijentDiv";
        bodyKlijenta.appendChild(divPrezime);

        let labelaPrezime=document.createElement("label");
        labelaPrezime.innerHTML="Prezime: ";
        labelaPrezime.className="labeleKlijent";
        divPrezime.appendChild(labelaPrezime);

        let labelaPrezimeKlijenta=document.createElement("labela");
        labelaPrezimeKlijenta.innerHTML=kl.prezime;
        labelaPrezimeKlijenta.className="labeleKlijent";
        divPrezime.appendChild(labelaPrezimeKlijenta);

        let divJMBG=document.createElement("div");
        divJMBG.className="klijentDiv";
        bodyKlijenta.appendChild(divJMBG);

        let labelaJMBG=document.createElement("label");
        labelaJMBG.innerHTML="JMBG: ";
        labelaJMBG.className="labeleKlijent";
        divJMBG.appendChild(labelaJMBG);

        let labelaJMBGKLijent=document.createElement("label")
        labelaJMBGKLijent.innerHTML=kl.jmbg;
        labelaJMBGKLijent.className="labeleKlijent";
        divJMBG.appendChild(labelaJMBGKLijent);

        let divBrLk=document.createElement("div");
        divBrLk.className="klijentDiv";
        bodyKlijenta.appendChild(divBrLk);

        let labelaBrLk=document.createElement("label");
        labelaBrLk.innerHTML="Broj licne karte:";
        labelaBrLk.className="labeleKlijent";
        divBrLk.appendChild(labelaBrLk);

        let labelaBrLkKlijent=document.createElement("label");
        labelaBrLkKlijent.innerHTML=kl.brlk;
        labelaBrLkKlijent.className="labeleKlijent";
        divBrLk.appendChild(labelaBrLkKlijent);
        
        let divAdresa=document.createElement("div");
        divAdresa.className="klijentDiv";
        bodyKlijenta.appendChild(divAdresa);

        let labelaAdresa=document.createElement("label");
        labelaAdresa.innerHTML="Adresa: ";
        labelaAdresa.className="labeleKlijent";
        divAdresa.appendChild(labelaAdresa);

        let labelaAdresaKlijenta=document.createElement("label");
        labelaAdresaKlijenta.innerHTML=kl.adresa;
        labelaAdresaKlijenta.className="labeleKlijent";
        divAdresa.appendChild(labelaAdresaKlijenta);

        let divEmail=document.createElement("div");
        divEmail.className="klijentDiv";
        bodyKlijenta.appendChild(divEmail);

        let labelaEmail=document.createElement("label");
        labelaEmail.innerHTML="E-mail adresa: ";
        labelaEmail.className="labeleKlijent";
        divEmail.appendChild(labelaEmail);

        let labelaEmailKlijenta=document.createElement("label");
        labelaEmailKlijenta.innerHTML=kl.email;
        labelaEmailKlijenta.className="labeleKlijent";
        divEmail.appendChild(labelaEmailKlijenta);
    }

    klijentUpdate(host){
        this.brisiSadrzaj2();

        let bodyZaCrtanje=document.createElement("div");
        bodyZaCrtanje.className="bodyZaCrtanjeKlijenta";
        host.appendChild(bodyZaCrtanje);

        let forma=document.createElement("div");
        forma.className="formaKlijent";
        bodyZaCrtanje.appendChild(forma);

        let dugmiciKlijent=document.createElement("div")
        bodyZaCrtanje.appendChild(dugmiciKlijent);

        let nadjiKlij=document.createElement("button");
        nadjiKlij.innerHTML="Promeni";
        nadjiKlij.className="dodajKlijenta";
        bodyZaCrtanje.appendChild(nadjiKlij);
        

        let divMail=document.createElement("div");
        divMail.className="divSign";
        forma.appendChild(divMail);

        let labelaMail=document.createElement("label");
        labelaMail.className="inputLabela";
        labelaMail.innerHTML="Email";
        divMail.appendChild(labelaMail);

        let inputMail= document.createElement("input");
        inputMail.className="inputEl";
        inputMail.type="email";
        divMail.appendChild(inputMail);

        let divOldPass=document.createElement("div");
        divOldPass.className="divSign";
        forma.appendChild(divOldPass);

        let labelaOldPass=document.createElement("label");
        labelaOldPass.className="inputLabela";
        labelaOldPass.innerHTML="Old password";
        divOldPass.appendChild(labelaOldPass);

        let inputOldPass= document.createElement("input");
        inputOldPass.className="inputEl";
        inputOldPass.type="password";
        divOldPass.appendChild(inputOldPass);

        let divNewPass=document.createElement("div");
        divNewPass.className="divSign";
        forma.appendChild(divNewPass);

        let labelaNewPass=document.createElement("label");
        labelaNewPass.className="inputLabela";
        labelaNewPass.innerHTML="New password";
        divNewPass.appendChild(labelaNewPass);

        let inputNewPass= document.createElement("input");
        inputNewPass.className="inputEl";
        inputNewPass.type="password";
        divNewPass.appendChild(inputNewPass);

        nadjiKlij.onclick=(ev)=>this.update(inputMail.value,inputOldPass.value,inputOldPass.value);
        
    }
    update(mail,pass,newpass){
        fetch("https://localhost:5001/Klijent/AzurirajKlijenta/"+mail+"/"+pass+"/"+newpass,{method:"PUT"})
        .then(response=>{
            if(response.ok){
                alert("Lozinka uspesno promenjena!")
            }
        })
    }
    klijentDelete(mail,pass){
        console.log(mail+" "+pass);
        fetch("https://localhost:5001/Klijent/ObrisiKlijenta/"+mail+"/"+pass,{method:"DELETE"})
        .then(response=>{
            if(response.ok){
                alert("Klijent uspesno obrisan!");
            }
            else{
                console.log(response);
            }
        })

    }
}