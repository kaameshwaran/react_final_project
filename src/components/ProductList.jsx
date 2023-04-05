import React from 'react'
import { useState,useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { ThemeProvider,createTheme } from '@mui/material';
import ProductCard from './ProductCard1';
import CartPage from './CartPage';

const ProductList = () => {
    const [products, setProducts] = useState([ 
      {
        id: 1,
        title: 'Filter Coffee',
        description: 'Filter coffee is brewed by pouring hot water over ground coffee beans',
        price: 30,
        image: 'https://rb.gy/168k',
      },
      {
        id: 2,
        title: 'Latte',
        description: 'Latte is a type of coffee made with espresso and steamed milk',
        price: 60,
        image: 'https://rb.gy/1lpd',
      },
      {
        id: 3,
        title: 'Cappuccino',
        description: 'Cappuccino is similar to latte but with a higher proportion of foam and less milk',
        price: 50,
        image: 'https://rb.gy/02di',
      },
      {
        id: 4,
        title:'Americano',
        description: 'Americano is a type of coffee made by diluting espresso with hot water',
        price: 80,
        image:'https://rb.gy/quul',
      },
      {
        id: 5,
        title: 'Mocha',
        description: 'Mocha is a type of coffee that combines espresso with chocolate and steamed milk',
        price: 90,
        image: 'https://rb.gy/7lpc',
      },
      {
        id: 6,
        title: 'Espresso',
        description: 'Espresso is made by forcing hot water through finely ground coffee beans, strong and rich flavor',
        price: 80,
        image: 'https://rb.gy/73qr',
      },
      {
        id: 7,
        title: 'Green Tea',
        description: 'A refreshing tea made from steamed leaves, known for its health benefits and light flavor.',
        price: 30,
        image: 'https://rb.gy/skfh',
      },
      {
        id: 8,
        title: 'Earl Grey Tea',
        description: 'A black tea flavored with bergamot oil, offering a floral and citrusy taste.',
        price: 40,
        image: 'https://rb.gy/9tau',
      },
      {
        id: 9,
        title: 'Chamomile Tea',
        description: 'An herbal tea made from chamomile flowers, known for its calming and soothing properties.',
        price: 50,
        image: 'https://rb.gy/5iux',
      },
      {
        id: 10,
        title:'Oolong Tea',
        description: 'A partially fermented tea with a unique flavor profile that falls between green and black tea.',
        price: 40,
        image:'https://rb.gy/jnb7',
      },
      {
        id: 11,
        title: 'Peppermint Tea',
        description: ' An herbal tea made from peppermint leaves, offering a refreshing and minty taste.',
        price: 60,
        image: 'https://rb.gy/vd06',
      },
      {
        id: 12,
        title: 'Rooibos Tea',
        description: 'A caffeine-free tea made from the leaves of the rooibos plant, sweet and nutty flavor.',
        price: 80,
        image: 'https://rb.gy/9d3f',
      },
      {
        id: 13,
        title: 'Croissant',
        description: 'A flaky and buttery French pastry with a crescent shape, commonly enjoyed for breakfast',
        price: 50,
        image: 'https://rb.gy/bz7g',
      },
      {
        id: 14,
        title: 'Donut',
        description: 'Donut is a deep-fried doughnut-shaped pastry, coated with sugar or glaze',
        price: 40,
        image: 'https://rb.gy/7rpv',
      },
      {
        id: 15,
        title: 'Éclair',
        description: 'Éclair is a pastry filled with whipped cream or custard, and topped with chocolate ganache',
        price: 50,
        image: 'https://rb.gy/30ld',
      },
      {
        id: 16,
        title:'Muffin',
        description: 'Muffin is a sweet or savory small cake, often containing fruit or nuts',
        price: 40,
        image:'https://rb.gy/2ck4',
      },
      {
        id: 17,
        title: 'Danish',
        description: 'Danish is a layered and buttery pastry, often filled with fruit or cheese',
        price: 60,
        image: 'https://rb.gy/mx7s',
      },
      {
        id: 18,
        title: 'Macaron',
        description: 'Macaron is a delicate and colorful French pastry made with almond flour',
        price: 40,
        image: 'https://rb.gy/9car',
      }
  ]);
   

  //   useEffect( ()=> { const fetchData = async () => {
  //     const result=await fetch ("https://dummyjson.com/products");
  //     const products = await result.json();
  //     setProducts(products);
  //   };
  //   fetchData();
  // },[]);


    
      const theme = createTheme({
        typography: {
          fontFamily: [
            'Exo2',
            'cursive',
          ].join(','),
        },
    });

    const theme2 = createTheme({
      typography: {
        fontFamily: [
          'kanit',
          'cursive',
        ].join(','),
      },
  });
      
      const [cartItems, setCartItems] = useState([]);
      
      
      
      const addToCart = (product) => {
      const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

      if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
      }
      
      else {
      const newItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newItem]);
      }
      };
      
     
      const removeFromCart = (id) => {
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
      };
      
      return (
        <>
        <div style={{marginTop:'10px',backgroundColor:'#eab904'}}>
        <ThemeProvider theme={theme}>
          <Typography variant="h3" component="h1">
          MENU
        </Typography>
        </ThemeProvider>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems:'center', justifyContent:'center'}}>
        {products.map((product) => (
        <div key={product.id} style={{ margin: 10 }}>
        <ProductCard product={product} addToCart={addToCart} />
        </div>
        ))}
        </div>
        </div>
        <br />
        <ThemeProvider theme={theme2}>
        <div style={{backgroundColor:'#5b7c99', display: 'flex', flexWrap: 'wrap',  alignItems:'center', justifyContent:'center'}}>
        <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
        </ThemeProvider>
        </>
      );
      };
      
      export default ProductList;