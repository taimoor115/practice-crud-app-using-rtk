import { createBrowserRouter } from "react-router-dom";
import Create from "./pages/Create";
import Layout from "./pages/Layout";
import Read from "./pages/Read";
import Edit from "./pages/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Create /> },
      { path: "read", element: <Read /> },
      { path: "edit/:id", element: <Edit /> },
    ],
  },
]);

export default router;
