import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Coupons from "../Pages/Coupons/Coupons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Coupons />,
      },
    ],
  },
]);
export default router;
