import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root/Root";
import ChoclateShop from "../pages/ChoclateShop";
import AddChocolate from "../pages/AddChocolate";

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      children: [
        {
          path: '/chocolateShope',
          element: <ChoclateShop></ChoclateShop>
        },
        {
          path: '/addChocolate',
          element: <AddChocolate></AddChocolate>
        }
      ]
    }
  ]);

  export default router;