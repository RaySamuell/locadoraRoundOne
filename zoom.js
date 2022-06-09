// ZOOM


const card1 = document.getElementById("card1");
const img = document.querySelector("img");

card1.addEventListener("mousemove", (e) =>{

  const x = e.clientX - e.target.offsetLeft; // propriedade retona a posição esquerda (em pixels)
  const y = e.clientY - e.target.offsetTop; //propriedade retorna a posição superior (em pixels)

  console.log(x, y) //se der erro

  img.style.transformOrigin = `${x}px ${y}px`; //permite alterar a posição dos elementos transformados

  img.style.transform = "scale(3)"; //Esta  propriedade permite girar, dimensionar, mover, inclinar, etc., elementos.

})

card1.addEventListener("mouseleave", () =>{
  img.style.transformOrigin = "center center";
  img.style.transform = "scale(1)"
})