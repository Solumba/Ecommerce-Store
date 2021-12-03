import React, { useState, useEffect } from "react";
import {Products, NavBar, Cart} from './components';
import {commerce} from './lib/commerce';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    //fetch data from commerce js using an Async function
    const fetchProducts = async () => {
        //destructure the data gotten
        const {data} = await commerce.products.list();

        //update the state to that data
        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }
    
    const addToCartHandler = async (productId, quantity) =>{
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
        console.log(cart);
    }

    //load the products on load using useEffect hook
    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    return (
        <div>
            <NavBar totalItems = {cart.total_items} />
            {/* <Products products = {products} onAddToCart = {addToCartHandler}/> */}
            <Cart cart ={cart}/>
        </div>
    )
}

export default App;