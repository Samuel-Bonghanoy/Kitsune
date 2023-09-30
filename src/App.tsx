import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        // element:
      },
      {
        path: "/menu",
      },
      { path: "/cart" },
      {
        path: "/order/new",
      },
      {
        path: "/order/:orderId",
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
