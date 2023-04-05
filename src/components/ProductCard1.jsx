import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
});

const ProductCard = ({ product, addToCart }) => {
  const classes = useStyles();


  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2" style={{ fontFamily: 'caveat' }}>
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
          <Typography variant="h6" component="p">
          ₹{product.price} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => addToCart(product)}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;