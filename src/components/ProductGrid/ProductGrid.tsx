import { useRecoilState } from "recoil";
import { STORE } from "../../store/store";
import { SamsungClient } from "../../client/client";
import { useEffect, useState } from "react";
import Product from "../Product/Product";

const ProductGrid = () => {
  const [products, setProducts] = useRecoilState(STORE.products);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    SamsungClient.fetchProducts()
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [setProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mx-auto max-w-[1000px]">
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <Product key={product.familyId} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
