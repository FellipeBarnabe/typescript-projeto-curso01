import { TipoTransacao } from "../dist/js/types/TipoTransacao";
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo !== null) {
    elementoSaldo.textContent = saldo.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkVisibility()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipoTransacao == "deposito") {
        saldo += valor;
    }
    else if (tipoTransacao == "transferencia" ||
        tipoTransacao == "pagamento de boleto") {
        saldo -= valor;
    }
    else {
        alert("Não foi possivel realizar a transação");
        return;
    }
    if (elementoSaldo !== null) {
        elementoSaldo.textContent = saldo.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
    const novaTransacao = {
        TipoTransacao: TipoTransacao,
        valor: valor,
        data: data,
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
