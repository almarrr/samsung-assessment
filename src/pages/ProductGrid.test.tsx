import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import ProductGrid from "./ProductGrid";
import { RecoilRoot } from "recoil";

test("ProductGrid renders correctly", async () => {
  const { getByTestId } = render(
    <RecoilRoot>
      <ProductGrid />
    </RecoilRoot>
  );

  expect(getByTestId("product-grid")).toBeTruthy();
});
