export const addItemToCart = (ItemsCart, AddedItemToCart) => {
   
    const existingCartItem = ItemsCart.find(
    (ItemsCart) => ItemsCart.id === AddedItemToCart.id
    );
   
    if (existingCartItem) {
    return ItemsCart.map((ItemsCart) =>
    ItemsCart.id === AddedItemToCart.id
    ? { ...ItemsCart, quantity: ItemsCart.quantity + 1 }
    : ItemsCart
    );
    }
   
    return [...ItemsCart, { ...AddedItemToCart, quantity: 1 }];
    };