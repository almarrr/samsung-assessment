import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Model } from "./pages/Model.tsx";
import Head from "./Head/Head.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mode/:modelCode",
    element: <Model />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <Head />
    <RouterProvider router={router} />
  </RecoilRoot>
);
