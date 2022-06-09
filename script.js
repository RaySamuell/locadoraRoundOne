


//----------------------------------------------------------------------------------------


//              LOGIN



function filmes() {
    let logir = document.getElementById("logar").value;
    let checkbox = document.getElementById("check");
    
    if (checkbox.checked == true){
        if (logir == "") {
            alert('Informe seu nome');
        }
        else {
            sessionStorage.setItem("logou", logir);
            window.location = "locadora.html"
        }
    } else{
        alert("Aceite os termos para prosseguir")
    }
    
}

function buscarValor() {
    document.getElementById('ray').value = "Seja bem-vindo(a) " + sessionStorage.getItem("logou") + "!";
}








//----------------------------------------------------------------------------------------





//             CARRINHO

var total = 0; // variável que retorna o total dos produtos que estão na LocalStorage.
  var i = 0;     // variável que irá percorrer as posições
  var valor = 0; // variável que irá receber o preço do produto convertido em Float.
  
  for(i=1; i<=99; i++) // verifica até 99 produtos registrados na localStorage
  {
    var prod = localStorage.getItem("produto" + i + ""); // verifica se há recheio nesta posição. 
    if(prod != null) 
    { 
      // exibe os dados da lista dentro da div itens
      document.getElementById("itens").innerHTML += localStorage.getItem("qtd" + i) + " x ";
      document.getElementById("itens").innerHTML += localStorage.getItem("produto" + i);
      document.getElementById("itens").innerHTML += " ";
      document.getElementById("itens").innerHTML += "R$: " + localStorage.getItem("valor" + i) + "<hr>";
      
      // calcula o total dos recheios
      valor = parseFloat(localStorage.getItem("valor" + i)); // valor convertido com o parseFloat()
      total = (total + valor); // arredonda para 2 casas decimais com o .toFixed(2)
    }
  } 
  // exibe o total dos recheios
  document.getElementById("total").innerHTML = total.toFixed(2);



//----------------------------------------------------------------------------------------



//                      PAGAMENTO


function pegarValor(){
    sessionStorage.setItem("precoFinal", total );
    console.log( sessionStorage.getItem("precoFinal"))

}

function passarValor(){
    document.getElementById("av").value = "R$ "+sessionStorage.getItem("precoFinal")+",00"
}


function parcelado(){
  let valorCompra = sessionStorage.getItem("precoFinal");
  var select = document.getElementById('card');
  var value = select.options[select.selectedIndex].value;
  let valorParcela = (valorCompra/value);

  document.getElementById("ray").value = "R$ " + valorParcela


}




//----------------------------------------------------------------------------------------







//             TEMPORIZADOR


function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      if (--timer < 0) {
          timer = duration;
      }
      if(timer === 0){
        window.location.replace ("index.html")
      }
  }, 1000);
}
// window.onload = 
function timer() {
  var duration = 60 * 15 ; // Converter para segundos
      display = document.querySelector('#timer'); // selecionando o timer
  startTimer(duration, display); // iniciando o timer
};

















