import ProductCard from "../components/ProductCard";
import useFetch from "../useFetch";

const Home = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/products");

  return (
    <main>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {products && <ProductCard products={products} />}
    </main>
  );
};

export default Home;
