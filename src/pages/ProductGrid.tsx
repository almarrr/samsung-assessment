import { useRecoilValue } from "recoil";
import { STORE } from "../store/store";
import Product from "../components/Product/Product";

const ProductGrid = () => {
  const products = useRecoilValue(STORE.products);

  return (
    <section className="py-8">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Product key={product.familyId} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
