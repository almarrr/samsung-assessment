import ActiveModel from "./components/ActiveModel/ActiveModel";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import "./fonts/samsung-fonts.css";

const App = () => {
  return (
    <>
      <ActiveModel />
      <section className="py-8">
        <ProductGrid />
      </section>
    </>
  );
};

export default App;
