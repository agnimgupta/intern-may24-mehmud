import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddCoupons from "../Pages/AddCoupons/AddCoupons";
import CouponList from "../Pages/CouponList/CouponList";
import CouponForm from "../Pages/AddCoupons/CouponForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/addCoupons",
        element: <AddCoupons />,
      },
      {
        path: "/couponForm",
        element: <CouponForm />,
      },
      {
        path: "/couponList",
        element: <CouponList />,
      },
    ],
  },
]);
export default router;
