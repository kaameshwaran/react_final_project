import React from 'react';
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { useState } from 'react';
import Box from '@mui/material/Box';

const CartPage = ({ cartItems, removeFromCart }) => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  React.useEffect(() => {
    let products = 0;
    let price = 0;
    cartItems.forEach((item) => {
      products += item.quantity;
      price += item.quantity * item.price;
    });
    setTotalProducts(products);
    setTotalPrice(price);
  }, [cartItems]);

  return (
    <Container>
      <Typography variant="h4" component="h1">
        Cart
      </Typography>
      <Typography variant="subtitle1" component="p">
        Total products: {totalProducts}
      </Typography>
      <Typography variant="subtitle1" component="p">
        Total price: ₹{totalPrice} 
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', padding: 40,  alignItems:'center', justifyContent:'center'}}>
        {cartItems.map((item) => (
          <div style={{ margin: 10, backgroundColor:" #30d5c8"}}>
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 200,
              margin: 1,
              border: '1px solid lightgrey',
              borderRadius: 4,
              padding: 1,
            }}
          >
            <Typography variant="h6" component="h2">
              {item.title}
            </Typography>
            <Typography variant="body1" component="p">
              Quantity: {item.quantity}
            </Typography>
            <Typography variant="body1" component="p">
              Price: {item.price} ₹
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </Box>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CartPage;
