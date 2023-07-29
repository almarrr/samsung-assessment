import { useCallback, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { STORE } from "../store/store";
import { SamsungClient } from "../client/client";

const GetProducts = () => {
  const setProducts = useSetRecoilState(STORE.products);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getProducts = useCallback(async () => {
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

  useEffect(() => {
    getProducts();
  }, [getProducts, setProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <></>;
};

export default GetProducts;
