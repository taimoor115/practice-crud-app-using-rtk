import { createBrowserRouter } from "react-router-dom";
import Create from "./component/Create";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Create /> }],
  },
]);

export default router;
