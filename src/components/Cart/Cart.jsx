import React from 'react'
import { Container, Typography, Button, Grid} from '@material-ui/core'
const Cart = () => {
    const isEmpty = true;

    const EmptyCart = () => {
        <Typography variant="subtitle1">You have no items in your shopping cart. Kindly select an item</Typography>
    }

    const FilledCart = () => {
        <>
            <Grid container spacing ={3} >

            </Grid>
        </>
    }

    return (
        <div>
            <Container>
                <div className={classes.tootbar} />
                <Typography className={classes.title} variant ="h3">Your Shopping Cart</Typography>
                {isEmpty ? <EmptyCart /> : <FilledCart />}
            </Container>
        </div>
    )
}

export default Cart
