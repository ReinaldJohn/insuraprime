import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import About from "./Pages/About";
import States from "./Pages/States";
import HomePage from "./Pages/HomePage";
import NotFound from "./SpecialPages/NotFound";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "states",
        element: <States />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
