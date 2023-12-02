import '../App.css';
import ProductList from '../components/product_list';
import { useSelector } from "react-redux";

function CheckoutPage() {
  const receipt = useSelector((state)=>{
    return state.receipt; // does it have to say return?
  });
  
  const getTotalPrice = (currentCart) =>{
    let price = 0;
    for(let i=0; i< currentCart.length; i++){
      price += currentCart[i].price;
    }
    return price;
  }

  let content = receipt.map((cart)=>{
    let list = <ProductList cart={cart}></ProductList>
    return <div className='border-2'>{list}<h1>Total price {getTotalPrice(cart)}</h1></div>
  })

  return (
    <div>
      <h1>Checkout Page</h1>
      <div className='grid grid-rows-1 grid-flow-col gap-4'>
        {content}
      </div>
    </div>
  );
}

export default CheckoutPage;