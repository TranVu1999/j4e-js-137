const products = [
    {
        productId: 1,
        productTitle: 'Classic Chair',
        price: '33.00',
        image: './assets/images/products/1.png'
    },
    {
        productId: 2,
        productTitle: 'Classic Chair',
        price: '33.00',
        image: './assets/images/products/2.png'
    },
    {
        productId: 3,
        productTitle: 'Classic Chair',
        price: '33.00',
        image: './assets/images/products/3.png'
    },
    {
        productId: 4,
        productTitle: 'Classic Chair',
        price: '33.00',
        image: './assets/images/products/4.png'
    },
    {
        productId: 5,
        productTitle: 'Classic Chair',
        price: '33.00',
        image: './assets/images/products/5.png'
    },
    {
        productId: 6,
        productTitle: 'Classic Chair',
        price: '33.00',
        image: './assets/images/products/6.png'
    },
    {
        productId: 7,
        productTitle: 'Classic Chair',
        price: '33.00',
        image: './assets/images/products/7.png'
    },
    {
        productId: 8,
        productTitle: 'Classic Chair',
        price: '33.00',
        image: './assets/images/products/8.png'
    },
    {
        productId: 9,
        productTitle: 'Classic Chair',
        price: '33.00',
        image: './assets/images/products/9.png'
    },

];

// Destructure Operator

function addToCart(productId) {
    // debugger
    const cart = getItemIntoLocalStorage('cart');

    if (cart !== null && Array.isArray(cart) && cart.length > 0) {
        saveItemIntoLocalStorage('cart', [...cart, productId]);
    } else {
        saveItemIntoLocalStorage('cart', [productId]);
    }
}

function saveItemIntoLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getItemIntoLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}