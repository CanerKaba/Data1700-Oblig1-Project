let ut="";
function validering() {
    let film=document.getElementById("velgFilm").value;
    let antall=document.getElementById("antall").value;
    let fornavn=document.getElementById("fornavn").value;
    let etternavn=document.getElementById("etternavn").value;
    let telefonnr=document.getElementById("telefonnr").value;
    let email=document.getElementById("email").value;
    console.log(film,antall,fornavn,etternavn,telefonnr,email)
    if(antall===""|| fornavn===""|| etternavn===""|| telefonnr===""|| email===""){
        document.getElementById("boks1").innerText=" Må skrive noe inn i antall";
        document.getElementById("boks2").innerText=" Må skrive noe inn i fornavn";
        document.getElementById("boks3").innerText=" Må skrive noe inn i etternavn";
        document.getElementById("boks4").innerText=" Må skrive noe inn i telefonnr";
        document.getElementById("boks5").innerText=" Må skrive noe inn i email";
    }
    const fornavnRegex=/^[a-zA-Z\s]+$/;
    if(!fornavnRegex.test(fornavn)){
        document.getElementById("feilNavn").innerText="Skriv inn et gyldig fornavn.";
        return;
    }
    const etternavnRegex=/^[a-zA-Z\s]+$/;
    if(!etternavnRegex.test(etternavn)){
        document.getElementById("feilEtternavn").innerText="Skriv inn et gyldig etternavn.";
        return;
    }
    const tlfRegex=/^[0-9]{1,8}$/;
    if(!tlfRegex.test(telefonnr)){
        document.getElementById("feilTelefonnr").innerText="Skriv inn et gyldig telefonnummer.";
        return;
    }
    const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email)){
        document.getElementById("feilEmail").innerText="Skriv inn en gyldig epost adresse";
        return;
    }

    Billett=[];
    Billett.push(
        {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            email: email
        }
    );
    console.log(Billett)
    ut+="<tr>";
    for (f of Billett){
        ut+="<th>"+f.film+"</th>"+
            "<th>"+f.antall+"</th>"+
            "<th>"+f.fornavn+"</th>"+
            "<th>"+f.etternavn+"</th>"+
            "<th>"+f.telefonnr+"</th>"+
            "<th>"+f.email+"</th>";
    }
    ut+="</tr>";
    document.getElementById("tabell").innerHTML=ut;
    document.getElementById("skjema").reset();
}
function slett(){
    ut="";
    document.getElementById("tabell").innerHTML=ut;
}