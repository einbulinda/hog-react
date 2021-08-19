import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { fetchProductsStart } from "../redux/Products/product.actions";

const mapState = ({ productsData }) => ({ products: productsData.products });

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  return <main>{products && <ProductCard products={products} />}</main>;
};

export default Home;
