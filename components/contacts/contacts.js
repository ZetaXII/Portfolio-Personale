// CONTATORECARATTERI TEXTAREA
function charCounterTextArea() {
    const textarea = document.getElementById('contacts-idea');
    const counter = document.getElementById('char-count');

    textarea.addEventListener('input', () => {
        counter.textContent = `${textarea.value.length} / 300`;
    });
}