const openModalButton = document.querySelectorAll('.detail-btn');
const closeModalButton = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

function mudarClasse(){
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}
for(let i=0; i<openModalButton.length; i++){
    openModalButton[i].addEventListener('click', ()=>{
        console.log('teste');
        mudarClasse();
        const modalH2 = document.querySelector('#modal-h2');
        const modalImg = document.querySelector('#modal-img');
        const modalTxt = document.querySelector('#modal-txt');
        const modalPrice = document.querySelector('#modal-price');
        const modalTitle = document.querySelector('#modal-title');   
        
        let title = document.querySelectorAll('.item-title')
        let img = document.querySelectorAll('.img-item')
        let price = document.querySelectorAll('.item-price')
        
        modalH2.innerHTML = title[i].innerText
        modalImg.src = img[i].src
        modalPrice.innerHTML = price[i].innerText
    })
}
closeModalButton.addEventListener('click',()=>{
    mudarClasse()
})

