# React Shopping Cart App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Project Structure

The project follows a standard React project structure created with Create React App (CRA) and organized with TypeScript. Here's an overview of the project structure:

`/src`: This is the main source folder for the application.

`/components`: Contains React components used in the application.

`ShoppingCartComponent.ts`: The main shopping cart component where users can view and manage the cart.
`/context`: Contains the context related files.

`ShoppingCartContext.tsx`: Defines the shopping cart context, including the state and context provider.
`App.tsx`: The entry point of the application where the context provider is wrapped around the main component.

`index.tsx`: The main entry point of the React application.

# How Context is Used

React Context is used in this project to manage the state of the shopping cart across different components without the need for prop drilling. Here's how it works:

`ShoppingCartContext.tsx` defines the shopping cart context using `createContext` and provides a context provider component, `ShoppingCartProvider`.

This provider component manages the shopping cart state and exposes functions to add, remove, and update items in the cart.

`ShoppingCartComponent.tsx` uses the `useShoppingCart` custom hook to access the shopping cart context. This component renders the shopping cart UI and allows users to interact with it. Users can add items to the cart, remove items, and update item quantities, all of which are handled by the context.

# Running the Application

To run the application locally, follow these steps:

Clone the repository to your local machine:


git clone https://github.com/ajonesb/react-shopping-cart.git

Navigate to the project directory:
`cd react-shopping-cart`

Install dependencies using npm:
`npm install`

Start the development server:
`npm start`

Future improvements:
I will be creating a Laravel backend so the application doesn't rely on local storage for adding the shopping cart items. 

# Demo 
https://codejones-react-context-shopping-cart.netlify.app/

Open your web browser and visit http://localhost:3000 to see the React Shopping Cart App in action.

Feel free to explore and interact with the shopping cart. Cart items are persisted using localStorage, so they will remain even after refreshing the page.

Enjoy shopping!
