import React from "react";
import { render } from "react-dom";
import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;

        return (
            // <div className="four column wide" key={id}>
            //     <div className="ui link cards">
            //         <div className="card">
            //             <div className="image" >
            //             </div>
            //             <img src={image} alt={title} />
            //             <div className="content">
            //                 <div className="header">
            //                     {title}
            //                 </div>
            //                 <div className="meta price">${price}</div>
            //                 <div className="meta">{category}</div>
            //             </div>

            //         </div>
            //     </div>

            // </div>
            <Card sx={{ maxWidth: 345 }}>
                <Link to ={`/product/${id}`}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {/* Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica */}
                    
                    {category}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">{price}</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Link>
            </Card>
        );

    })

    return (
        <>
            {renderList}

        </>
    )




}

export default ProductComponent;
