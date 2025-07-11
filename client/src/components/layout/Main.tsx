import React from "react";
import Header from "./Header";
// routing
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
// pages
import Dashboard from "../../pages/Dashboard";
import Orders from "../../pages/Orders";
import Products from "../../pages/Products";
import Customers from "../../pages/Customers";
import Invoices from "../../pages/Invoices";
import Analytics from "../../pages/Analytics";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
  },
]);

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products/*" element={<Products />} />
      <Route path="/orders/*" element={<Orders />} />
      <Route path="/customers/*" element={<Customers />} />
      <Route path="/invoices/*" element={<Invoices />} />
      <Route path="/Analytics" element={<Analytics />} />
    </Routes>
  );
}

const Main: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Main;
