// To get something from local storage, You will get it as a strign.
// Convert this to javascript object/ array

// get cart form local storage
const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

// save cart to local storage
const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// Add item to cart localstorage
const addItemToCartLocalStorage = id => {
    const cart = getCartFromLocalStorage();
    cart.push(id);

    //const newCart = [...cart, id];
    // save new cart to the local storage 
    saveCartToLocalStorage(cart);
}

export {
    getCartFromLocalStorage as getStoreCart,
    addItemToCartLocalStorage as addToStroedCart
}
