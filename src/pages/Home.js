import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for the resource from server");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <main>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {products && <ProductCard products={products} />}
    </main>
  );
};

export default Home;
