const modal_overlay = document.querySelector ('.modal_overlay'); // variável que procura e guarda a div class "modal_overlay"
const cards = document.querySelectorAll ('.card'); // variável que procura e guarda a div class "card"

for (let card of cards){
    card.addEventListener ("click",function(){
        modal_overlay.classList.add('active')
    })
}

document.querySelector ('.close_modal').addEventListener("click",function(){
    modal_overlay.classList.remove("active")
})