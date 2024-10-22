export const cart = [];

// add to cart
export function addToCart(productId, value){
    let matchingItem;
    cart.forEach((cartItem) =>{
        if (productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    if (matchingItem){
        matchingItem.quantity +=value;
    }
    else{
        cart.push({
            productId: productId,
            quantity:value
        })
    }
}
