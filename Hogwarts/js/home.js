// let images = ['/img/bg-main-home.png', '/img/bg-main-home-2.jpg', '/img/bg-main-home-3.webp' ]
// let bannerImage = document.querySelector('#bannerImage')
// let imgAtual = 0

// function mudarImagem() {
//     imgAtual = (imgAtual + 1) % images.length
//     let imagemUrl = images[imgAtual]
//     bannerImage.src = imagemUrl
//     bannerImage.style.transition = "all 2s";
//     // bannerImage.style.transform = 'scale(1.1)';
// }

// setInterval(mudarImagem, 3000);

let images = ['/img/bg-main-home.png', '/img/bg-main-home-2.jpg', '/img/bg-main-home-3.webp'];
let bannerImage = document.querySelector('#bannerImage');
let imgAtual = 0;

function mudarImagem() {
    imgAtual = (imgAtual + 1) % images.length;
    let imagemUrl = images[imgAtual];
    bannerImage.style.transition = "all 5s";    
    bannerImage.style.transform = 'scale(1.1)';
    
    // Aguarda um pequeno atraso para que a escala seja aplicada antes de trocar a imagem
    setTimeout(function() {
        bannerImage.src = imagemUrl;
        
        // Remove o efeito de zoom (escala normal)
        setTimeout(function() {
            bannerImage.style.transform = 'scale(1)';
        }, 50);
    }, 1000);
}

setInterval(mudarImagem, 5000);

// let p = document.querySelector('#pTxt')

// let texts = ["Conheça as casas de Hogwarts", "Fique por dentro das noticias", "Adquira nossos produtos"];
// let bannerTexto = document.querySelector('.bannerTexto');
// let textAtual = 0;

// function mudarTexto() {
//     textAtual = (textAtual + 1) % texts.length;
//     let novoTexto = texts[textAtual];
    
    
//     bannerTexto.style.opacity = 0;
    
//     setTimeout(function() {
//         bannerTexto.textContent = novoTexto;
        
//         setTimeout(function() {
//             bannerTexto.style.opacity = 1;
//             bannerTexto.style.fontSize = "30px";
//             bannerTexto.style.letterSpacing = "2px";
            
//         }, 50);
//     }, 1000);
// }

// setInterval(mudarTexto, 5000);