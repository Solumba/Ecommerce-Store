import React, { useState, useEffect } from "react";
import {Products, NavBar} from './components';
import {commerce} from './lib/commerce';

const App = () => {
    const [products, setProducts] = useState([]);

    //fetch data from commerce js using an Async function
    const fetchProducts = async () => {
        //destructure the data gotten
        const {data} = await commerce.products.list();
        
        //update the state to that data
        setProducts(data);
    }

    //load the products on load using useEffect hook
    useEffect(() => {
        return fetchProducts()
    }, []);

    return (
        <div>
            <NavBar />
            <Products />
        </div>
    )
}

export default App;