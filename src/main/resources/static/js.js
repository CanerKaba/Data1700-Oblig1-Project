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
        document.getElementById("feilMeldingAntall").innerText=" Må skrive noe inn i antall";
        document.getElementById("feilMeldingFornavn").innerText=" Må skrive noe inn i fornavn";
        document.getElementById("feilMeldingEtternavn").innerText=" Må skrive noe inn i etternavn";
        document.getElementById("feilMeldingTelefonnr").innerText=" Må skrive noe inn i telefonnr";
        document.getElementById("feilMeldingEmail").innerText=" Må skrive noe inn i email";
    }
    const fornavnRegex=/^[a-zA-Z\s]+$/;
    if(!fornavnRegex.test(fornavn)){
        alert("Skriv inn et gyldig fornavn.");
        return;
    }
    const etternavnRegex=/^[a-zA-Z\s]+$/;
    if(!etternavnRegex.test(etternavn)){
        alert("Skriv inn et gyldig etternavn.");
        return;
    }
    const tlfRegex=/^[0-9]{1,8}$/;
    if(!tlfRegex.test(telefonnr)){
        alert(" Skriv inn et gyldig telefonnr.");
        return;
    }
    const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email)){
        alert("Skriv inn en gyldig epost adresse");
        return;
    }

    filmInfo=[];
    filmInfo.push(
        {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            email: email
        }
    );
    console.log(filmInfo)
    ut+="<tr>";
    for (f of filmInfo){
        ut+="<th>"+f.film+"</th>"+
            "<th>"+f.antall+"</th>"+
            "<th>"+f.fornavn+"</th>"+
            "<th>"+f.etternavn+"</th>"+
            "<th>"+f.telefonnr+"</th>"+
            "<th>"+f.email+"</th>";
    }
    ut+="</tr>";
    document.getElementById("table").innerHTML=ut;
    document.getElementById("form").reset();
}
function slett(){
    ut="";
    document.getElementById("table").innerHTML=ut;
}