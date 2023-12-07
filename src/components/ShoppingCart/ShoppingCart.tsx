// ShoppingCartComponent.tsx

import React, { useState } from "react";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import { Item } from "../../Types/ShoppingCart.interface";
import {
  CartContainer,
  AddItemForm,
  Input,
  Button,
  ItemInfo,
  ItemName,
  ItemQuantity,
  ItemContainer,
} from "./ShoppingCartStyles"; 

function ShoppingCart() {
  const { cart, updateCartItemQuantity, removeItemFromCart, addItemToCart } =
    useShoppingCart();

  // State for the new item to add
  const [newItem, setNewItem] = useState<Item>({
    id: Math.floor(Math.random() * 1000), // Just a temporary random ID
    name: "",
    quantity: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem((prevItem: any) => ({
      ...prevItem,
      [name]: name === "quantity" ? parseInt(value) : value,
    }));
  };

  const handleAddItem = () => {
    addItemToCart(newItem);
    setNewItem({
      id: Math.floor(Math.random() * 1000), // Generate a new temporary random ID
      name: "",
      quantity: 0,
    });
  };

  return (
    <CartContainer>
      <AddItemForm>
        <h3>Add Item to Cart:</h3>
        <Input
          type="text"
          name="name"
          placeholder="Item Name"
          value={newItem.name}
          onChange={handleInputChange}
        />
        <Input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
        />
        <Button onClick={handleAddItem}>Add to Cart</Button>
      </AddItemForm>

      {cart.map((item) => (
        <ItemContainer key={item.id}>
          <ItemInfo>
            <ItemName>{item.name}</ItemName>
            <ItemQuantity>Quantity: {item.quantity}</ItemQuantity>
          </ItemInfo>

          <Button
            onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
          >
            +
          </Button>
          <Button
            onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Button onClick={() => removeItemFromCart(item.id)}>Remove</Button>
        </ItemContainer>
      ))}
    </CartContainer>
  );
}

export default ShoppingCart;
