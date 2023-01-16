import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";



const ProductDetail =() =>{
    const product = useSelector((state)=> state.product)
    const {image,title,price,category,description} = product
    const  {productId} = useParams();
    const dispatch = useDispatch();

    console.log(product)

    const fetchProductDetail = async() =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err =>{
                console.log("ERR",err);
        });
        dispatch(selectedProduct(response.data));

    }

    useEffect(()=>{
        if (productId && productId !== "") fetchProductDetail();
    },[productId])




    return (
        <>
        {Object.keys(product).length === 0 ? (
            <div>..loading</div>
        ) : (
            <Card sx={{ maxWidth: 345 }}>
                {/* <Link to ={`/product/${id}`}> */}
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {/* Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica */}
                    
                    {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">{price}</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                {/* </Link> */}
            </Card>

        )}
        
        
            </>
    )




}

export default ProductDetail;
