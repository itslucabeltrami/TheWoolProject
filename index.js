// products lists and information
const products = [
    //WOMAN SECTION
    {
        id: 1,
        name: 'Cashmere turtleneck sweater',
        price: '1800,00',
        image: '242M12316204-C9504-F.jpeg',
        category: ['sweaters', 'woman'],
    },
    {
        id: 2,
        name: 'Cotton corduroy trousers ',
        price: '800,00',
        image: '242MA180P8724-C871-F.webp',
        category: ['pants', 'woman'],
    },
    {
        id: 3,
        name: 'Virgin wool and cashmere Parka',
        price: '3400,00',
        image: '242MD5329704-C008-F.webp',
        category: ['coats', 'woman'],
    },
    {
        id: 4,
        name: 'Medium leather bag',
        price: '970,00',
        image: '251MBHED2676-C3251-F.webp',
        category: ['bags', 'woman'],
    },
    {
        id: 5,
        name: 'Leather sandals',
        price: '450,00',
        image: '251MZSFC2508-C5859-F.webp',
        category: ['shoes', 'woman'],
    },
    {
        id: 6,
        name: 'Boston bag',
        price: '1200,00',
        image: '242MBTPD2632-C7890-F.webp',
        category: ['bags', 'woman'],
    },
    {
        id: 7,
        name: 'Cashmere sweater',
        price: '900,00',
        image: '242M12724809-C9729-F.jpeg',
        category: ['sweaters', 'woman'],
    },
    {
        id: 8,
        name: 'Cotton trousers',
        price: '700,00',
        image: '242MH137P5962-C9729-F.webp',
        category: ['pants', 'woman'],
    },
    {
        id: 9,
        name: 'Wool coat',
        price: '2600,00',
        image: '242MD5329938-C001-F.webp',
        category: ['coats', 'woman'],
    },
    //MAN SECTION
    {
        id: 20,
        name: 'Chevron Blazer',
        price: '2400,00',
        image: '251MR4767BFDK-C048-F.webp',
        category: ['blazers', 'man'],
    },
    {
        id: 21,
        name: 'Chevron Pants',
        price: '1200,00',
        image: '251MR476L00V-C048-F.jpeg',
        category: ['pants', 'man'],
    },
    {
        id: 22,
        name: 'Waterproof parka',
        price: '4100,00',
        image: '251MD4796462-C2455-F.webp',
        category: ['coats', 'man'],
    },
    {
        id: 23,
        name: 'Shoes',
        price: '900,00',
        image: '242MZUNICK771-C8291-F.webp',
        category: ['shoes', 'man'],
    },
    {
        id: 24,
        name: 'Leather belt',
        price: '650,00',
        image: '242MAUNX320-C101-F.webp',
        category: ['accessories', 'man'],
    },


];

let cartProductsToBuy = []

let toTop = $('#to-top-btn');

$(document).ready(() => {

    initApp();

    updateCartCounter();

    productsToPrint();

    $(document).on('scroll', function(){ scrollFunction() })

    // cart logic
    const cartIcon = $("#cart-button-action");
    const cart = $('.cart');
    const cartCLose = $('.cart-close-button');
    const cartCloseArrow = $('.cart-close-arrow-button');
    const cartContentSideMenu = $('.cart-content-side-menu');

    cartIcon.on('click', function () {
        cart.addClass('active')
        cartContentSideMenu.fadeIn()

    });
    cartCLose.on('click', function () {
        cart.removeClass('active')
        cartContentSideMenu.hide()
    });

    cartContentSideMenu.on('click', function () {
        cart.removeClass('active')
        cartContentSideMenu.hide()
    });

    cartCloseArrow.on('click', function () {
        cart.removeClass('active')
        cartContentSideMenu.fadeOut()
    });
})

// INIT APP
function initApp() {
    cartProductsToBuy = JSON.parse(localStorage.getItem('cart-products'));

    const cartToBuyElements = ''
    let cartToBuyTotalPrice = 0
    const cartContent = $('#cart-content-box');
    const cartContentPrice = $('#cart-content-price-counter');

    cartContent.text("");
    if (cartToBuyTotalPrice) {
        cartProductsToBuy.forEach((element) => {
            const priceCounted = parseFloat(element.price.replace(',', '.')) * element.count;
            cartToBuyTotalPrice += priceCounted;

            let toPrintVar = cartToBuyElements;

            toPrintVar += `
            <div class="cart-box" data-id="${element.id}">
                <img src="./assets/img/${element.image}" class="cart-img">
                <div class="cart-detail">
                      <h2 class="cart-product-title">${element.name}</h2>
                      <i class="cart-price">${element.price} €</i>
                      <div class="cart-quantity">
                          <button id="decrement" onclick="cartItemActionQuantity('minus', ${element.id})">-</button>
                          <span id="cartToBuyActionCount" class="number">${element.count}</span>
                          <button id="increment" onclick="cartItemActionQuantity('plus', ${element.id})">+</button>
                      </div>
                  </div>
                  <div onclick="removeToCartElement(${element.id})">
                <img src="./assets/img/delete-bin-7-line.png" class="cart-remove"/>
                </div>
            </div>
        `;
            cartContent.append(toPrintVar);
        })
    }

    cartContentPrice.text("")
    cartContentPrice.append(cartToBuyTotalPrice.toFixed(2).toString().replace('.', ',')+'€')

}

// SCROLL
function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        toTop.fadeIn(500);
    } else {
        toTop.fadeOut(300);
    }
}

// SCROLL TO TOP
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome
}

// PRODUCTS TO PRINT
function productsToPrint() {
    let toPrint = '';

    const productsContainer = $('#products-container-to-show');
    const page = $(location).prop('href').split('/');
    const pageCategory = page[page.length - 1].split('.')[0].toString()

    for (const product of products) {
        // copy of original
        let toPrintVar = '';

        if (product.category.find((i) => i === pageCategory)) {
            toPrintVar += `<div class="card-product" data-id="${product.id}">`
            toPrintVar += '<div class="card-product-container">'
            toPrintVar += '<div class="card-product-image">'
            toPrintVar += `<img src="./assets/img/${product.image}">`
            toPrintVar += '</div>'
            toPrintVar += '<div class="product-name-style">' + product.name + '</div>'
            toPrintVar += '<div  class="product-price-style">' + product.price + '€</div>'
            toPrintVar += `<div class="add-to-cart-button" onclick="addToCartProcessor(${product.id})">add to cart</div>`
            toPrintVar += '</div>'
            toPrintVar += '</div>'
        }

        // back to original copy
        toPrint += toPrintVar;
    }
    productsContainer.append(toPrint)
}

// filtering products with category button
function filterProducts(type, gender) {
    const productsContainer = $('#products-container-to-show');

    //removing previous products
    productsContainer.children().remove()
    productsContainer.hide()

    let toPrint = '';

    for (const product of products) {
        let toPrintVar = '';
        // filter: if category same then print
        if (product.category.find((i) => i === type) && product.category.find((i) => i === gender)) {
            toPrintVar += `<div class="card-product" data-id="${product.id}">`
            toPrintVar += '<div class="card-product-container">'
            toPrintVar += '<div class="card-product-image">'
            toPrintVar += `<img src="./assets/img/${product.image}">`
            toPrintVar += '</div>'
            toPrintVar += '<div class="product-name-style">' + product.name + '</div>'
            toPrintVar += '<div  class="product-price-style">' + product.price + '€</div>'
            toPrintVar += `<div class="add-to-cart-button" onclick="addToCartProcessor(${product.id})">add to cart</div>`
            toPrintVar += '</div>'
            toPrintVar += '</div>'
        }
        // storing values in variable
        toPrint += toPrintVar;
    }
    //showing the selected products with animation
    productsContainer.append(toPrint);
    productsContainer.fadeIn(500);
}

function showAll(type) {
    //removing previous products
    productsContainer.children().remove()
    productsContainer.hide()

    let toPrint = '';

    for (const product of products) {
        let toPrintVar = '';
        // filter: if category same then print
        if (product.category.find((i) => i === type)) {
            toPrintVar += `<div class="card-product" data-id="${product.id}">`
            toPrintVar += '<div class="card-product-container">'
            toPrintVar += '<div class="card-product-image">'
            toPrintVar += `<img src="./assets/img/${product.image}">`
            toPrintVar += '</div>'
            toPrintVar += '<div class="product-name-style">' + product.name + '</div>'
            toPrintVar += '<div  class="product-price-style">' + product.price + '€</div>'
            toPrintVar += '<div class="add-to-cart-button">add to cart</div>'
            toPrintVar += '</div>'
            toPrintVar += '</div>'
        }

        // storing values in variable
        toPrint += toPrintVar;
    }
    //showing the selected products with animation
    productsContainer.append(toPrint);
    productsContainer.fadeIn(500);
}

function addToCart(product) {
    const cartContent = $('#cart-content-box');
    const cartContentPrice = $('#cart-content-price-counter');

    if (product) {
        const isInCart = cartProductsToBuy.find((i) => i.id === product.id);

        if (isInCart !== undefined) {
            isInCart.count += 1;
        } else {
            cartProductsToBuy.push({
                ...product,
                count: 1,
            });
        }

    }

    const cartToBuyElements = ''
    let cartToBuyTotalPrice = 0

    cartContent.text("")

    cartProductsToBuy.forEach((element) => {
        const priceCounted = parseFloat(element.price.replace(',', '.')) * element.count;
        cartToBuyTotalPrice += priceCounted;

        let toPrintVar = cartToBuyElements;

        toPrintVar += `
            <div class="cart-box" data-id="${element.id}">
                <img src="./assets/img/${element.image}" class="cart-img">
                <div class="cart-detail">
                      <h2 class="cart-product-title">${element.name}</h2>
                      <i class="cart-price">${element.price} €</i>
                      <div class="cart-quantity">
                          <button id="decrement" onclick="cartItemActionQuantity('minus', ${element.id})">-</button>
                          <span id="cartToBuyActionCount" class="number">${element.count}</span>
                          <button id="increment" onclick="cartItemActionQuantity('plus', ${element.id})">+</button>
                      </div>
                  </div>
                  <div onclick="removeToCartElement(${element.id})">
                <img src="./assets/img/delete-bin-7-line.png" class="cart-remove"/>
                </div>
            </div>
        `;

        cartContent.append(toPrintVar);
    })

    cartContentPrice.text("")
    cartContentPrice.append(cartToBuyTotalPrice.toFixed(2).toString().replace('.', ',')+'€')

    // updateTotalPrice();

    localStorage.setItem('cart-products', JSON.stringify(cartProductsToBuy));

    updateCartCounter();
}

function removeToCartElement(id) {
    cartProductsToBuy = cartProductsToBuy.filter((i) => i.id !== id);
    addToCart()
}

function cartItemActionQuantity(type, id) {
    const isInCart = cartProductsToBuy.find((i) => i.id === id);

    if (type === 'plus') {
        isInCart.count += 1;
    } else {
        if (isInCart.count === 1 ) { return }

        isInCart.count -= 1;
    }

    addToCart()
}

function addToCartProcessor(id) {
    const productToAddToCart = products.find((product) => product.id === id);
    addToCart(productToAddToCart)
    addToCartAnimation(id)
}

function addToCartAnimation(id) {
        let cart = $('#cart-button-action');
        let imgtodrag = $('.card-product[data-id="'+id+'"]').find("img").eq(0);
        if (imgtodrag) {
            let imgclone = imgtodrag.clone()
                .offset({
                    top: imgtodrag.offset().top,
                    left: imgtodrag.offset().left
                })
                .css({
                    'opacity': '0.7',
                    'position': 'absolute',
                    'height': '460px',
                    'width': '340px',
                    'z-index': '100'
                })
                .appendTo($('body'))
                .animate({
                    'top': cart.offset().top + 31,
                    'left': cart.offset().left + 15,
                    'width': 80,
                    'height': 90
                }, 1000);

            setTimeout(function () {
                cart.effect("bounce", {
                    times: 1
                });
            }, 1500);

            imgclone.animate({
                'width': 0,
                'height': 0
            }, function () {
                $(this).detach()
            });
        }
}

function updateCartCounter() {
    let cartCounter = $('#cart-counter');
    let totalItems = 0;

    cartProductsToBuy.forEach((product) => {
        totalItems += product.count;
    })

    if (totalItems) {
        cartCounter.text(totalItems > 9 ? " " : totalItems);
        cartCounter.show();
    }
    else {
        cartCounter.text(0);
        cartCounter.hide();
    }
}

function continueAlert() {
    alert("It works! You would be redirected to Payment Page if it existed.");
}

