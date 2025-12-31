import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import {FaStar, FaShoopingCart} from 'react-icons/fa';
const ProductCard = ({ product }) => {
    const {addToCart} = useContext(CartContext);}
    const rederStars = (rating) => {
        return Array.from({length: 5}, (_, i) => (
            <FaStar key={i} color={i < rating ? '#ffb400' : '#e8e1e1'} />
        ));
    };
    return(
        <Card className='shadow product-card border-0 rounded-4 overflow-hidden position-relative' style={{width:'22rem', margin:'20px auto', transition:'transform 0.3s ease , box-shadow 0.3s ease', background}}>

        </Card>
    )
    export default ProductCard;