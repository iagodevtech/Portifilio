    document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

function ocultar() {
    var element = document.getElementById("minhaId");
    element.classList.add("hide");
  }
  
  function mostrar() {
    var element = document.getElementById("minhaId");
    element.classList.remove("hide");
  }



  document.querySelector("#qtde").addEventListener("change", atualizarPreco)
  document.querySelector("#js").addEventListener("change", atualizarPreco)
  document.querySelector("#fachada-sim").addEventListener("change", atualizarPreco)
  document.querySelector("#fachada-nao").addEventListener("change", atualizarPreco)
  document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector('#prazo').value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo ${prazo} semanas`
    atualizarPreco() 
  })


  function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const reformtotl = document.querySelector("#js").checked
    const incluiarquiteto = document.querySelector("#fachada-sim").checked
    const prazo = document.querySelector('#prazo').value

    
    let preco = qtde * 189;
    if (reformtotl) preco *=  1.1
    if(incluiarquiteto) preco += 2000
     let taxaUrgencia = 1 - prazo*0.1;
     preco *= 1 + taxaUrgencia
    
    document.querySelector("#preco").innerHTML = `R$  ${preco.toFixed(2)}`
  }

