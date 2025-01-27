// products lists and information
const products = [
    {
        id: 1,
        name: 'Cashmere turtleneck sweater',
        price: '1800,00',
        image: '242M12316204-C9504-F.jpeg',
        category: ['sweaters','woman'],
    },
    {
        id: 2,
        name: 'Cotton corduroy trousers ',
        price: '800,00',
        image: '242MA180P8724-C871-F.webp',
        category: ['pants','woman'],
    },
    {
        id: 3,
        name: 'Virgin wool and cashmere Parka',
        price: '3400,00',
        image: '242MD5329704-C008-F.webp',
        category: ['coats','woman'],
    },
    {
        id: 4,
        name: 'Medium leather bag',
        price: '970,00',
        image: '251MBHED2676-C3251-F.webp',
        category: ['bags','woman'],
    },
    {
        id: 5,
        name: 'Leather sandals',
        price: '450,00',
        image: '251MZSFC2508-C5859-F.webp',
        category: ['shoes','woman'],
    },
    {
        id: 6,
        name: 'Boston bag',
        price: '1200,00',
        image: '242MBTPD2632-C7890-F.webp',
        category: ['bags','woman'],
    },
    {
        id: 7,
        name: 'Cashmere sweater',
        price: '900,00',
        image: '242M12724809-C9729-F.jpeg',
        category: ['sweaters','woman'],
    },
    {
        id: 8,
        name: 'Cotton trousers',
        price: '700,00',
        image: '242MH137P5962-C9729-F.webp',
        category: ['pants','woman'],
    },
    {
        id: 9,
        name: 'Wool coat',
        price: '2600,00',
        image: '242MD5329938-C001-F.webp',
        category: ['coats','woman'],
    },


];

let toPrint = '';
const productsContainer = $('#products-container-to-show');
const page = $(location).prop('href').split('/');
const pageCategory = page[page.length -1].split('.')[0].toString()

for (const product of products) {
   // copy of original
    let toPrintVar = '';

    if (product.category.find((i) => i === pageCategory))
        {
            toPrintVar += `<div class="card-product" data-id="${product.id}">`
            toPrintVar += '<div class="card-product-container">'
            toPrintVar += '<div class="card-product-image">'
            toPrintVar += `<img src="./assets/img/${product.image}">`
            toPrintVar += '</div>'
            toPrintVar += '<div class="product-name-style">'+product.name+'</div>'
            toPrintVar += '<div  class="product-price-style">'+product.price+'€</div>'
            toPrintVar += '<div class="add-to-cart-button">add to cart</div>'
            toPrintVar += '</div>'
            toPrintVar += '</div>'
        }

    // back to original copy
    toPrint += toPrintVar;
}
productsContainer.append(toPrint)

// filtering products with category button

function filterProducts(type, gender) {
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
            toPrintVar += '<div class="product-name-style">'+product.name+'</div>'
            toPrintVar += '<div  class="product-price-style">'+product.price+'€</div>'
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
            toPrintVar += '<div class="product-name-style">'+product.name+'</div>'
            toPrintVar += '<div  class="product-price-style">'+product.price+'€</div>'
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




