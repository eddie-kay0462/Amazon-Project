export const cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
},
{
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
}];

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
