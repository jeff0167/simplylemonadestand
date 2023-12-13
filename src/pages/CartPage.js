import '../App.css';
import React, { useState } from 'react';
import ProductList from '../components/product_list';
import { Popover, PopoverHandler, PopoverContent, Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { createReceipt } from "../store";

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state)=>{
      return state.cart;
  });

  const [openPopover, setOpenPopover] = useState(false);
  
  const getTotalPrice = () =>{
    let price = 0;
    for(let i=0; i<cart.length; i++){
      price += cart[i].price;
    }
    return price;
  }

  const confirmPurchase = () =>{
    if (window.confirm("Are you sure you wanna purchase this product?")) purchase();
  }

  const purchase = () =>{
    dispatch(createReceipt(cart)); // add the cart object to a receipt object array and empty the cart

    setTimeout(() => {
      setOpenPopover(true);  // some cheap pop-up animation 
    }, 500);
    setTimeout(() => {
      setOpenPopover(false);
    }, 2500);
  }

  return (
    <div>
      <h1>Cart Page</h1>
      <h1>Total price {getTotalPrice()}</h1>
      <div className='grid grid-rows-1 grid-flow-col gap-4'>
        <ProductList cart={cart}></ProductList>
      </div>
      <div>
        <div className="mb-3 flex gap-3">
          <Popover open={openPopover} placement="top-end">
          <PopoverHandler>
            <Button> </Button>
          </PopoverHandler>
          <PopoverContent>
          <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">Payment</h3>
          </div>
          <div className="px-3 py-2">
            <p>Purchase have been completed</p>
          </div>
          </PopoverContent>
        </Popover>
        </div>
        <div>
          <button onClick={() => confirmPurchase()} className='bg-blue-700 mx-8 rounded-md hover:bg-blue-600 p-2'>Pay for products</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;