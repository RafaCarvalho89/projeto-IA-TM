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

// function voltarMenu() {
//     window.addEventListener('scroll', () => {
//         let menuLateral = document.querySelector('#menuLateral');
//         let inputCheck = document.querySelector('.alteraMenu');
//         if(window.scrollY > 1) {
//             menuLateral.style.left = "-300px"
//             inputCheck.checked = false;
//         }
//     });
// }   
// voltarMenu();

// let menuCheck = document.querySelector('.alteraMenu');
// menuCheck.addEventListener('click', showChecked);
// function showChecked() {
//     console.log(menuCheck)
// }