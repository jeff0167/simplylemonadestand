import '../App.css';
import ProductItem from '../components/product_item';

function ProductList({cart}) {
    return [...new Set(cart)]?.map((drink, id) =>{ // new Set only get's list of uniqe items, quite nice
        return <ProductItem product={drink} cart={cart} key={id}></ProductItem>
      });
}

export default ProductList;