import "../App.css";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import grape from "../images/Grapes.jpg";
import products from "../data/productListData";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../store";

// I get data from an api, and on top of that I have local data matching the id
const url = "https://www.fruitmap.org/api/trees";

function ProductPage() {
  // functional component
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart;
  });

  const [drinks, setDrinks] = useState([""]);

  const getDrinks = async () => {
    const response = await axios.get(url);
    //console.log(response.data);
    setDrinks(response.data);
  };

  useEffect(() => {
    getDrinks();
    console.log(getDrinks());
  }, []);

  const hasInCart = (drinkId) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === drinkId) return true;
    }
    return false;
  };

  const getAmount = (drinkId) => {
    let amount = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === drinkId) {
        amount++;
      }
    }
    return amount;
  };

  // from the id, return the image and price
  const getImage = (productId) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === productId) return products[i].imagePath;
    }
    return grape;
  };
  const getPrice = (productId) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === productId) return products[i].price;
    }
    return 5;
  };
  const exist = (productId) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === productId) return true;
    }
    return false;
  };

  const getProduct = (drinkId) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === drinkId) return products[i];
    }
    return products[0]; // I have a project where I simply tried out redux toolkkit with slices, find it
  };

  const handleProductAdd = (val) => {
    // but when we import it, it's a action creater?!?!?
    dispatch(addProduct(val)); // here we dispatch an action, with the action type "addProduct" and payload val
  };
  const handleProductRemove = (val) => {
    dispatch(removeProduct(val));   // think it's action creater when you create it and and action/action object when you use it and dispatch it
  };

  let content = drinks?.map((drink) => {
    if (exist(drink.id)) return show(drink);
  });

  function show(drink, id) {
    let button;
    if (!hasInCart(drink.id))
      button = (
        <div key={id}>
          <button
            onClick={() => handleProductAdd(getProduct(drink.id))} className="bg-blue-700 mx-8 rounded-md hover:bg-blue-600 p-2">Add
          </button>
        </div>
      );
    else
      button = (
        <div>
          <button onClick={() => handleProductAdd(getProduct(drink.id))}
            className="bg-blue-700 mr-2 rounded-md hover:bg-blue-600 p-2">Add
          </button>
          <button
            onClick={() => handleProductRemove(getProduct(drink.id))} className="bg-rose-800 ml-2 rounded-md hover:bg-rose-600 p-2">Remove
          </button>
          <p className="text-sm">Already {getAmount(drink.id)}x in cart</p>
        </div>
      );
    return (
      <div className=" border-black imageZoom" key={id}>
        <img
          className="object-contain rounded-s-xl h-48"
          src={getImage(drink.id)}
        ></img>
        <p>{drink.name}</p>
        {button}
        <p>Price: {getPrice(drink.id)}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Product Page</h1>
      <div className="grid grid-rows-2 grid-flow-col gap-10">{content}</div>
    </div>
  );
}

export default ProductPage;
