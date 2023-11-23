/* eslint-disable react/prop-types */
import './card.css';
import {Link} from "react-router-dom";


const Card = (props) => {
    const { selectedProduct, setSelectedProduct} = props;
   const {product} = props;
   /*const product = {
                        "title":"Planetaria Cap",
                        "description":"temporary description",
                        "price":5,
                        "category": "cap",
                        "id":1,
                        "imageUrl":"./images/cap_1.jpg"
                    }*/
const handleViewProduct= () =>{
    setSelectedProduct(product);
    console.log(selectedProduct,"console");
 
}
    return (
        <>
            <article className="card-product">
                <img src={product.imageUrl} />
                <div>
                    <p className="card-bread-select">{product.title}</p>
                    <p className="card-price">{product.price + " €"}</p>
                    <Link to="/store/product-details"><button onClick={()=>handleViewProduct()} className="btn">View Product</button></Link>
                </div>
            </article>
        </>
    );
}

export default Card;