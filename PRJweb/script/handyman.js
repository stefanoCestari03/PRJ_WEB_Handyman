//controllo credenziali

//prendo dipendenti da localstorage
let dipendenti = JSON.parse(localStorage.getItem("dipendenti"));
let tickets = JSON.parse(localStorage.getItem("tickets"));

let loginButton = document.getElementById("login");
let loginFlag = false;
loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    let username = document.getElementById("username");
    let nomeHandyman = username.value;
    let password = document.getElementById("password");
    let passwordHandyman = password.value;
    dipendenti.forEach(dipendente => {
        console.log(dipendente.nome + " " + dipendente.password);
        if ((dipendente.nome == nomeHandyman) && (dipendente.password == passwordHandyman)) {
            loginFlag = true;
        }
    });
    console.log("login: " + loginFlag);
    const tabellaHandyman = document.getElementById("handyman-table");
    //inizializzo tabella
    tabellaHandyman.textContent= " ";
    const table = document.createElement('table');
    table.setAttribute("class", "table");
    table.setAttribute("id", "tabellaHandyman");
    // Crea l'intestazione della tabella
    const intestazioneTabella = table.createTHead();
    const rigaIntestazione = intestazioneTabella.insertRow();
    const intestazioneNome = rigaIntestazione.insertCell();
    intestazioneNome.setAttribute("scope", "col");
    const intestazioneEmail = rigaIntestazione.insertCell();
    const intestazioneTelefono = rigaIntestazione.insertCell();
    const intestazioneDettagli = rigaIntestazione.insertCell();
    const intestazioneStato = rigaIntestazione.insertCell();
    const IntestazioneOre = rigaIntestazione.insertCell();
    intestazioneNome.textContent = 'Nome';
    intestazioneEmail.textContent = 'e-mail';
    intestazioneTelefono.textContent = 'Telefono';
    intestazioneDettagli.textContent = 'Dettagli';
    intestazioneStato.textContent = 'Stato';
    IntestazioneOre.textContent = 'mezzore Lavoro';

    if (loginFlag) {
        // Crea il corpo della tabella
        const corpoTabella = table.createTBody();
        // Itera gli interventi e aggiunge una riga alla tabella per ogni intervento
        tickets.forEach(ticket => {
            if(ticket.stato == nomeHandyman){
                const riga = corpoTabella.insertRow();
                const cellaNome = riga.insertCell();
                const cellaEmail = riga.insertCell();
                const cellaTelefono = riga.insertCell();
                const cellaDettagli = riga.insertCell();
                const cellaStato = riga.insertCell();
                const cellaOre = riga.insertCell();
                // Popola le celle della riga con i dati dell'intervento
                cellaNome.textContent = ticket.nome;
                cellaEmail.textContent = ticket.email;
                cellaTelefono.textContent = ticket.telefono;
                cellaDettagli.textContent = ticket.dettagli;
                cellaStato.textContent = ticket.stato;
                let inputTag = document.createElement("input");
                inputTag.setAttribute("class","form-control");
                inputTag.type = "number";
                inputTag.value = 0;
                cellaOre.appendChild(inputTag);
                //assegnazione del lavoro
                /*let assegnazione = document.getElementById("selectAssegnazione");
                console.log(assegnazione);*/
                /*// Crea una lista non ordinata per i prezzi dell'intervento
                const listaPrezzi = document.createElement('ul');
                for (const [servizio, prezzo] of Object.entries(intervento.prezzi)) {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${servizio}: ${prezzo} euro`;//virgolette inverse per mettere variabili all'interno della stringa
                    listaPrezzi.appendChild(listItem);
                }
                // Aggiunge la lista dei prezzi alla cella dei prezzi della riga
                cellaPrezzi.appendChild(listaPrezzi);*/
                
            }
        });

        //console.log(assegnazione.value);
        /*assegnazione.addEventListener("change", () => {
            cellaStato.textContent = "Assegnato";
        });*/


        // Aggiunge la tabella ticket alla pagina HTML
    }
    const titolo = document.getElementById("handymanTitle");
    //inizializzo il titolo
    titolo.textContent = "ecco le tue ticket";
    titolo.textContent += ` ${nomeHandyman}` ;
    tabellaHandyman.appendChild(table);
});

