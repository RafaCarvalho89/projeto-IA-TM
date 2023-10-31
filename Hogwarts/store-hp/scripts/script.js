// Carrinho
let cartIcon = document.querySelector(".cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector(".close-cart");

// Abre a aba do carrinho
cartIcon.onclick = () => {
    cart.classList.add('active');
};

// Fecha a aba  do carrinho
closeCart.onclick = () => {
    cart.classList.remove('active');
};

// Verifica o estado do carregamento da página e inicia a função ready
if(document.readyState == 'loading') {
    console.log(document.readyState);
    document.addEventListener('DomContentLoaded', ready);
} else {
    ready();
}// Função que inicia o carrinho
function ready() {
    // Remover itens do carinho
    let removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for (let i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    // Verifica mudança na quantidade de itens do carrinho
    let quantityInputs = document.getElementsByClassName('cart-quantity');
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    // Verifica se o botão de adicionar ao carrinho foi clicado
    let addCart = document.getElementsByClassName('add-cart-btn');
    for (let i = 0; i < addCart.length; i++){
        let button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
    // Verifica se o botão de comprar foi clicado
    document.querySelector('.buy-btn').addEventListener('click', buyButtonClicked);
}

function buyButtonClicked() {
    alert('Sua compra foi registrada.')
    let cartContent = document.querySelector('.cart-content');
    while(cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}

// Remove um item do carrinho
function removeCartItem(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

// Controla a mudança de valor na quantidade do item e atualiza o total
function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateTotal();
}

// Pega as informações do item quando o botão de adicionar ao carrinho é clicado, adiciona ao carrinho e atualiza o total
function addCartClicked(event) {
    let button = event.target;
    let item = button.parentElement.parentElement;
    let title = item.querySelectorAll('.item-title')[0].innerText;
    let price = item.querySelectorAll('.item-price')[0].innerText;
    let itemImg = item.querySelectorAll('.img-item')[0].src;
    console.log(title, price, itemImg);
    addProductToCart(title, price, itemImg);
    updateTotal();
}

// Adiciona o item selecionado no carrinho
function addProductToCart(title, price, itemImg) {
    let cartBox = document.createElement('div');
    cartBox.classList.add('cart-box');
    let cartItems = document.getElementsByClassName('cart-content')[0];
    let cartItemsNames = cartItems.getElementsByClassName('cart-item-title');
    for (let i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == title){
            alert("Você já adicionou este item ao carrinho.")
            return;
        }
    }
    let cartBoxContent = `
                            <img src="${itemImg}" alt="" class="cart-img">
                            <div class="detail-box">
                                <div class="cart-item-title">${title}</div>
                                <div class="cart-price">${price}</div>
                                <input type="number" value="1" name="quantity" class="cart-quantity">
                            </div>
                            <i class="fa-solid fa-trash cart-remove"></i>`;

    cartBox.innerHTML = cartBoxContent;
    cartItems.append(cartBox);
    cartBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}

// Atualiza o valor total do carrinho
function updateTotal() {
    let cartContent = document.getElementsByClassName('cart-content')[0]; 
    let cartBoxes = cartContent.getElementsByClassName('cart-box');
    let total = 0;
    for (let i = 0; i < cartBoxes.length; i++){
        let cartBox = cartBoxes[i];
        let priceElement = cartBox.querySelector('.cart-price');
        let quantityElement = cartBox.querySelector('.cart-quantity');
        let price = Number(priceElement.innerText.replace("R$", ""));
        let quantity = Number(quantityElement.value);

        total = total + (price * quantity);
    }
    document.querySelector('.total-price').innerText = `R$ ${total.toFixed(2)}`;
}



