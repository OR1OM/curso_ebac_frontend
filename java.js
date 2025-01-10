const CampoA = document.getElementById("first-number");
const CampoB = document.getElementById("second-number");
const Botao = document.getElementById("bottom");
const MessageBox = document.getElementById("Message-box");

Botao.addEventListener("click", function(e) {
    e.preventDefault();
    const valorA = parseFloat(CampoA.value);
    const valorB = parseFloat(CampoB.value);

    if (valorB > valorA) {
        MessageBox.textContent ="O valor de B é maior que o valor de A"
    } else {
        MessageBox.textContent ="O valor de A é maior que o valor de B";
    }
});