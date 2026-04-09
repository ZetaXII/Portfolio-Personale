// CONTATORE CARATTERI TEXTAREA
function charCounterTextArea() {
    const textarea = document.getElementById('contacts-idea');
    const counter = document.getElementById('char-count');

    textarea.addEventListener('input', () => {
        counter.textContent = `${textarea.value.length} / 300`;
    });
}

// COMPILAZIONE MESSAGGIO EMAIL
function initMailSenderContacts() {
    const form = document.getElementById("contacts-form");
    const popup = document.getElementById("mail-popup");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("contacts-name").value.trim();
        const telefono = document.getElementById("contacts-telephone").value.trim();
        const idea = document.getElementById("contacts-idea").value.trim();

        if (!nome || !telefono || !idea) {
            alert("Per favore compila tutti i campi.");
            return;
        }

        const subject = encodeURIComponent(`Contatto per richiesta di lavoro - "${nome}"`);
        const body = encodeURIComponent(
            `Ciao Mario,\n\n` +
            `Sono ${nome} e ti contatto per questa idea:\n\n` +
            `${idea}\n\n` +
            `Ti lascio il mio recapito telefonico per poter essere ricontattato:\n` +
            `Tel. ${telefono}\n\n` +
            `Grazie!`
        );

        const mailtoLink = `mailto:mario.zaccardi12@gmail.com?subject=${subject}&body=${body}`;

        popup.style.display = "flex";

        setTimeout(() => {
            window.location.href = mailtoLink;
            setTimeout(() => {
                popup.style.display = "none";
            }, 2000);
        }, 500);
    });
}