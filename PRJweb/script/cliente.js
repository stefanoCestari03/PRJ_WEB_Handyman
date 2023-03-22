//struttura dati 
const interventi = [
    {
        id: 1,
        nome: 'Idraulica',
        descrizione: 'Riparazione di perdite, installazione di rubinetti, scarichi, ecc.',
        prezzi: {
            'Riparazione perdite': 50,
            'Installazione rubinetti': 80,
            'Installazione scarichi': 100
        }
    },
    {
        //faccio oggetti per prezzi e non un oggetto unico.
        id: 2,
        nome: 'Carpenteria',
        descrizione: 'Montaggio di mobili, riparazione di porte e finestre, ecc.',
        prezzi: {
            'Montaggio mobili': 120,
            'Riparazione porte': 60,
            'Riparazione finestre': 80
        }
    },
    {
        id: 3,
        nome: 'Elettricità',
        descrizione: 'Riparazione di impianti elettrici, installazione di prese e interruttori, ecc.',
        prezzi: {
            'Riparazione impianti elettrici': 80,
            'Installazione prese e interruttori': 60,
            'Sostituzione lampadine': 20
        }
    },
    {
        id: 4,
        nome: 'Interventi domestici',
        descrizione: 'Pulizia, verniciatura, assemblaggio di elettrodomestici, ecc.',
        prezzi: {
            'Pulizia casa': 100,
            'Verniciatura': 150,
            'Assemblaggio elettrodomestici': 80
        }
    }
];
localStorage.setItem('interventi', JSON.stringify(interventi));
//options dinamica form
/*<!-- loop through interventi array and generate options -->
          ${interventi.map(intervento => `<option value="${intervento.id}"> ${intervento.nome}</option>`).join('')} 
*/
/*
standard:
let select = document.getElementById("intervento");
for(i = 0; i < interventi.length; i++){
    let option = document.createElement("option");
    option.textContent = interventi[i].nome;
    select.appendChild(option); 
}
*/
// con la HOF forEach():
let select = document.getElementById("intervento");

interventi.forEach(intervento => {
    let option = document.createElement("option");
    option.textContent = intervento.nome;
    select.appendChild(option);
});


//gestione tikets
let richiestaForm = document.getElementById('richiestaForm');

// Event listener per la submit del form
richiestaForm.addEventListener('submit', function (event) {
    event.preventDefault(); // previene il comportamento predefinito del submit

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const interventoId = document.getElementById('intervento').value;
    const intervento = interventi.find(intervento => intervento.id === parseInt(interventoId));
    const dettagli = document.getElementById('dettagli').value;

    // Crea oggetto ticket
    const ticket = {
        nome,
        email,
        telefono,
        intervento,
        dettagli,
        stato: 'In attesa'
    };

    // Salva ticket sul localStorage
    let tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    tickets.push(ticket);
    localStorage.setItem('tickets', JSON.stringify(tickets));

    // Reset form
    richiestaForm.reset();

    // Mostra messaggio di successo
    alert('Richiesta inviata con successo!');
});

let tickets = JSON.parse(localStorage.getItem("tickets"));
console.log(tickets);