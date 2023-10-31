function mostrarMenuLateral() {
    let menu = document.querySelector('#menuLateral')
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block'
    }
    else {
        menu.style.display = 'none'
    }       
}

function fecharMenuLateral() {
    let menu = document.querySelector('#menuLateral')
    if (menu.style.display === 'block') {
        menu.style.display = "none"
    }
}

function mostrarMenuBaixo() {
    let menuBaixo = document.querySelector('#menuBaixo')    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            menuBaixo.style.display = "block"
        } else {
            menuBaixo.style.display = "none"
        }
    })
}
mostrarMenuBaixo();


function expandir() {
    card.style.width="500px"
    card.style.heigth="500px"
}