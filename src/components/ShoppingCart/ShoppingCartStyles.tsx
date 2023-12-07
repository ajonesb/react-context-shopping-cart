// ShoppingCartStyles.js
import styled from "styled-components";

export const CartContainer = styled.div`
  background-color: #000000a0;
  border: 1px solid #ff00d4;
  color: white;
  padding: 30px;
  margin: 60px auto;
  max-width: 60%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: auto;
  }
`;

export const AddItemForm = styled.div`
  margin-top: 20px;
`;

export const Input = styled.input`
  background-color: white;
  color: black;
  padding: 10px;
  margin-right: 10px;
  border: none;
  width: 150px;
`;
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

export const ItemName = styled.div`
  font-size: 20px;
  margin: 10px 0px;
`;

export const ItemInfo = styled.div`
  padding: 10px;
  font-weight: bold;
`;

export const ItemQuantity = styled.div`
  font-size: 15px;
  width: 100px;
`;

export const Button = styled.button`
  background-color: #ff00ae6d;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
`;
