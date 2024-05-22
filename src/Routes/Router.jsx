import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddCoupons from "../Pages/AddCoupons/AddCoupons";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <h1>hwllo</h1>,
    element: <Root />,
    children: [
      {
        path: "/addCoupons",
        element: <AddCoupons />,
      },
    ],
  },
]);
export default router;
