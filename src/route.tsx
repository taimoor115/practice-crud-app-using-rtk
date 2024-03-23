import { createBrowserRouter } from "react-router-dom";
import Create from "./component/Create";
import Layout from "./pages/Layout";
import Read from "./component/Read";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Create /> },
      { path: "/read", element: <Read /> },
    ],
  },
]);

export default router;
