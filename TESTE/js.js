let cep = document.getElementById("cep");
let btn = document.getElementById("btn");
var btnReset = document.getElementById("btn-reset");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  mostrarCep(cep.value);
  btnReset.addEventListener('click', resetar())
});



// pegar o cep, e mostrar na tela
async function mostrarCep(cep) {
  try {
    var pegandoCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var convertendoCep = await pegandoCep.json();
    if (convertendoCep.erro) {
      throw Error("CPF INVALIDO, TIO");
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML += `<h3>Endereço</h3>
      <p>${convertendoCep.logradouro}</p>
      <h3>bairro</h3>
      <p>${convertendoCep.bairro}</p>
      <h3>localidade</h3>
      <p>${convertendoCep.localidade}</p>
      <h3>uf</h3>
      <p>${convertendoCep.uf}</p>
      <h4 class="uf"></h4>
    `;
    return convertendoCep;
  } catch (erro) {
    alert('INSIRA UM CEP VALIDO')
    console.log(erro);
  }
}

// btn reset
function resetar() {
  btnReset.innerHTML += `
  <button type="submit" class="reset" id="reset">Nova Pesquisa</button>
  `
  reset.addEventListener('click', ()=>{
    location.reload();
  })
}