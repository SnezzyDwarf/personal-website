import { createBrowserRouter } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MyPage from "./pages/MyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/MyPage",
    Component: MyPage,
  },
]);
