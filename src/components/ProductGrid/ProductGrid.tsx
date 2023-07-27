import { useRecoilState } from "recoil";
import { STORE } from "../../store/store";
import { SamsungClient } from "../../client/client";
import { useCallback, useEffect } from "react";
import Product from "../Product/Product";

const ProductGrid = () => {
  const [products, setProducts] = useRecoilState(STORE.products);

  const getProducts = useCallback(async () => {
    const client = new SamsungClient();

    const products = await client.fetchProducts();

    setProducts(products);
  }, [setProducts]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (!products) {
    return <div>Loading...</div>;
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
