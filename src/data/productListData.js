import product from '../models/product';
import raspberry from "../images/Raspberry.jpg";
import grape from "../images/Grapes.jpg";
import peach from "../images/Peach.jpg";
import blackberry from "../images/Blackberries.jpg";
import strawberry from "../images/Strawberries.jpg";
import bilberry from "../images/Bilberries.jpg";
import chestnut from "../images/Chestnut.jpg";
import elderberry from "../images/Elderberries.jpg";
import fig from "../images/Fig.jpg";
import greengage from "../images/Greengage.jpg";
import lemon from "../images/Lemons.jpg";
import orange from "../images/Orange.jpg";
import plum from "../images/Plum.jpg";
import redribe from "../images/RedRibes.jpg";
import redcherry from "../images/SomeRedCherry.jpg";
import walnut from "../images/Walnuts.jpg";

const products = [new product("21", raspberry, "Raspberry", 10),new product("24", grape, "Grape", 4), new product("13", peach, "Peach", 8), 
new product("22", blackberry, "Blackberry", 3), new product("14", strawberry, "Strawberry", 7), new product("31", bilberry, "Bilberry", 2), 
new product("20", chestnut, "Chestnut", 9), new product("17", elderberry, "Elderberry", 11), new product("12", fig, "Fig", 8), 
new product("16", greengage, "Greengage", 7), new product("29", lemon, "Lemon", 6), new product("28", orange, "Orange", 5), 
new product("4", plum, "Plum", 13), new product("11", redribe, "Redribe", 4), new product("8", redcherry, "Sour cherry", 4),
new product("6", walnut, "Walnut", 12)
];

export default products;