import '../App.css';
import ProductItem from '../components/product_item';

function ProductList({cart}) {
    return [...new Set(cart)]?.map((drink) =>{ // new Set only get's list of uniqe items, quite nice
        return <ProductItem product={drink} cart={cart}></ProductItem>
      });
}

export default ProductList;