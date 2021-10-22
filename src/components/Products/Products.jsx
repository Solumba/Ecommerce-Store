import React, {Component} from "react";
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
// const products = () => {
//     return (
//         <Grid container justify='center' spacing={4}>

//         </Grid>
//     )
// }

class Products extends Component {
    State = {
        products : [
            {id:1, name: 'Shoes', description: 'Running shoes', price: '$50', image: 'https://m.media-amazon.com/images/I/81ntddef-+L._AC_UY395_.jpg'},
            {id:2, name: 'Macbook', description: 'Apple Macbook', price: '$1,300', image: 'https://ridicventures.com/wp-content/uploads/2021/03/mbp16touch-space-select-201911.jpeg'},
        ]
    }
    render(){
        return (
            <main>
                <Grid container justify='center' spacing={4}>
                    {
                        this.State.products.map(product => {
                            return (
                                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                    <Product product={product}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </main>
        )
    }
}

export default Products;