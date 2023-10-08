import '../App.css';
import grape from "../images/Grapes.jpg";
import products from "../data/productListData";

function ProductItem({product, cart}) {

    const getImage = (productId) => {  
        for (let i = 0; i < products.length; i++) {
            if(products[i].id == productId) return products[i].imagePath;
        }
        return grape;
    }

    const totalPrItem = (drink) =>{
        return getPrice(drink) * getAmount(drink);
    }

    const getPrice = (productId) => {  
        for (let i = 0; i < products.length; i++) {
            if(products[i].id == productId) return products[i].price;
        }
        return 5;
    }

    const getAmount = (drinkId) =>{
        let amount = 0;
        for (let i = 0; i < cart.length; i++) {
            if(cart[i].id == drinkId) {
            amount++;
            }
        }
        return amount;
    }

    return (
        <div className='border-2 border-black rounded-md imageZoom'>
            <img className='object-contain rounded-md h-96 w-170' src={getImage(product.id)}></img> 
            <p>{product.name}</p>
            <p>Price: {getPrice(product.id)} X {getAmount(product.id)} = {totalPrItem(product.id)} Total</p>
        </div>
    );
}

export default ProductItem;