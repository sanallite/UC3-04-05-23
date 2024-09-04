const form= document.getElementById("novoItem");

const lista= document.getElementById("listaid");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    criaElemento( evento.target.elements['produtoid'].value, evento.target.elements['quantidadeid'].value );
});
// O método addEventListener() é que nos permite configurar funções a serem chamadas quando o evento específico acontecer, neste exemplo é quando o usuário clicar no botão adicionar.

function criaElemento(produtoid, quantidadeid) { const novoItem= document.createElement("li");
    novoItem.classList.add("item");

    const numeroItem= document.createElement("strong");
    numeroItem.innerHTML= quantidadeid;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += produtoid;

    lista.appendChild(novoItem);
}
