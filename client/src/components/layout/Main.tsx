import React from "react";
import Header from "./Header";
// routing
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

function Root() {
  return (
    <Routes>
      <Route path="/header" element={<Header />} />
    </Routes>
  );
}

const Main: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Main;
