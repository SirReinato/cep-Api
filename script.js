async function buscarEndereco(cep) {
  var mensagemErro = document.getElementById('erro');
  mensagemErro.innerHTML = '';
  try {
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCepConvertida = await consultaCep.json();
    if (consultaCepConvertida.erro) {
      throw Error("CEP NÃO EXISTENTE");
    }
    var cidade = document.getElementById("cidade");
    var logradouro = document.getElementById("endereco");
    var bairro = document.getElementById("bairro");
    var estado = document.getElementById("estado");

    cidade.value = consultaCepConvertida.localidade;
    logradouro.value = consultaCepConvertida.logradouro;
    bairro.value = consultaCepConvertida.bairro;
    estado.value = consultaCepConvertida.estado;

    console.table(consultaCepConvertida);
    return consultaCepConvertida;
  } catch (erro) {
    mensagemErro.innerHTML += ` <h3 class="erro"> CEP INVÁLIDO, tente novamente </h3> `
    console.log(erro);
  }
}
let cep = document.getElementById("cep");

cep.addEventListener("focusout", () => buscarEndereco(cep.value));
